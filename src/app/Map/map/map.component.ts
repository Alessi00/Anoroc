import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, AuthenticationType } from 'azure-maps-control';
import { JsonAppConfigService } from 'src/app/Services/json-app-config.service';
import { ClusterServiceService } from 'src/app/Services/cluster-service.service';
import * as atlas from 'azure-maps-control';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClusterPins } from 'src/app/Models/cluster-pins.model';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})

export class MapComponent implements AfterViewInit 
{
  initialLatitude = -25.7545444;
  initialLongitude = 28.2292589;
  ClusterService: ClusterServiceService;
  OldClusterData: Array<Array<ClusterPins>>;
  daysVisited: Array<number>;
  enableClear: boolean;
  constructor(private http: HttpClient, cluster: ClusterServiceService) 
  {
    this.ClusterService = cluster;
    this.geoJsonData = new Array<any>();
    this.OldClusterData = new Array<Array<ClusterPins>>();
    this.daysVisited = new Array<number>();

    for(var i = 0; i < 8; i++)
    {
      this.ClusterService.getOldCluster(i+1).subscribe(clusterList => {
        this.OldClusterData.push(clusterList);
      });
    }

    this.enableClear = false;
  }

  @ViewChild('map', { static: true })
  public mapContainer: ElementRef;
  map: Map;
  datasource: atlas.source.DataSource;
  Heatmap: atlas.layer.HeatMapLayer;
  geoJsonData: Array<any>;

  ngAfterViewInit(): void {
    this.map = new Map(this.mapContainer.nativeElement, {
      center: [this.initialLongitude, this.initialLatitude],
      zoom: 4,
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: JsonAppConfigService.settings && JsonAppConfigService.settings.AzureMaps ?
                        JsonAppConfigService.settings.AzureMaps.Primarykey : ''
      }
    });
    var that = this;
    this.map.events.add('ready', function () {
      that.drawClusters();
    });
  }

  arrayContains(num)
  {
    var returnVal = false;
    for(var i = 0; i < this.daysVisited.length; i++)
    {
      if(this.daysVisited[i] == num)
      {
        returnVal = true;
      }
    }
    if(returnVal == false)
    {
      this.daysVisited.push(num);
    }
    return returnVal;
  }

  sliderInput(e)
  {
    if(this.arrayContains(e) == false)
    {
      this.geoJsonData = null;
      this.geoJsonData = new Array<any>();
      var geoJsonClass;

      if(this.OldClusterData[e-1] != null)
      {
        this.OldClusterData[e-1].forEach(oldCluster => {

          oldCluster.Coordinates.forEach(coord => {
            geoJsonClass = new atlas.data.Feature(new atlas.data.Point([coord.Longitude, coord.Latitude]), {
          });
          this.geoJsonData.push(geoJsonClass);
        });

        }); 
        this.datasource.add(this.geoJsonData);
      }
    }
  }

  clearClusters()
  {

    this.map.layers.remove(this.Heatmap);
    this.map.sources.clear();
    this.daysVisited = null;
    this.daysVisited = new Array<number>();
    this.enableClear = false;
    this.Heatmap = new atlas.layer.HeatMapLayer(this.datasource, null, {
      //Set the weight to the point_count property of the data points.
      weight: ['get', 'point_count'],
      
      //Optionally adjust the radius of each heat point.
      radius: 20
    });
    this.map.layers.add(this.Heatmap);
  }

  drawClusters(): void
  {
    this.ClusterService?.getClusters().subscribe(responseData => {
      var geoJsonClass;

      responseData.forEach(mycluster => {
        
        mycluster.Coordinates.forEach(coord => {
              geoJsonClass = new atlas.data.Feature(new atlas.data.Point([coord.Longitude, coord.Latitude]), {
            });
            this.geoJsonData.push(geoJsonClass);
          });
      });
      this.datasource = new atlas.source.DataSource(null, {
        //Tell the data source to cluster point data.
        cluster: true,
    
        //The radius in pixels to cluster points together.
        clusterRadius: 10
      });
      
      this.map.sources.add(this.datasource);
      
      this.Heatmap = new atlas.layer.HeatMapLayer(this.datasource, null, {
        //Set the weight to the point_count property of the data points.
        weight: ['get', 'point_count'],
        color: [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0, 'rgba(0,0,0,0)',
          0.01, 'purple',
          0.5, '#fb00fb',
          1, '#00c3ff'
        ],
        //Optionally adjust the radius of each heat point.
        radius: 20
      });

      //Create a heatmap and add it to the map.
      this.map.layers.add(this.Heatmap, 'labels');
      
      //Load a data set of points, in this case earthquake data from the USGS.
      this.datasource.add(this.geoJsonData, 0);
    });
    this.enableClear = true;
  }
}
