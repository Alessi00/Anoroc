import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, AuthenticationType } from 'azure-maps-control';
import { JsonAppConfigService } from 'src/app/Services/json-app-config.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})

export class MapComponent implements AfterViewInit 
{
  initialLatitude = -25.7545444;
  initialLongitude = 28.2292589;
  constructor() 
  {

  }

  @ViewChild('map', { static: true })
  public mapContainer: ElementRef;

  ngAfterViewInit(): void {
    const map = new Map(this.mapContainer.nativeElement, {
      center: [28.2292589, -25.7545444],
      zoom: 10,
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: JsonAppConfigService.settings && JsonAppConfigService.settings.AzureMaps ?
                        JsonAppConfigService.settings.AzureMaps.Primarykey : ''
      }
    });
  }
}
