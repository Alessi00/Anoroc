import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../Models/token.model';
import { JsonAppConfigService } from './json-app-config.service';
import { Itinerary } from '../Models/itinerary.model';
import { Observable } from 'rxjs';
import { internal } from 'azure-maps-control';


@Injectable()
export class ItineraryServiceService {

  token: Token;
  risk: Itinerary;
  
  constructor(private http: HttpClient) 
  {
    
  }
 
  getRisk(latitude:Number, longitude:Number) : Observable<Number>
  {
    this.token = new Token();
    this.token.access_token = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocKey ?
                              JsonAppConfigService.settings.AnorocKey.access_token : '';
    this.token.Object_To_Server = latitude.toString()+longitude.toString();

    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.post<Number>(baseEndpoint + "Itinerary/ProcessItineraryWebApp", this.token)
    //this.risk= new Itinerary(this.http.post<Number>(baseEndpoint + "Itinerary/ProcessItineraryWebApp", this.token))
  }
}
