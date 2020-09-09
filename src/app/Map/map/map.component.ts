import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, AuthenticationType } from 'azure-maps-control';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements AfterViewInit {
  initialLatitude = -25.7545444;
  initialLongitude = 28.2292589;
  constructor() {

  }

  @ViewChild('map', { static: true })
  public mapContainer: ElementRef;

  ngAfterViewInit(): void {
    const map = new Map(this.mapContainer.nativeElement, {
      center: [-25,75424, 28,2315868],
      zoom: 1,
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: ''
      }
    });
  }
}
