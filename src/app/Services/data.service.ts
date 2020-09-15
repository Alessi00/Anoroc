import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataOverTime } from '../Models/data-over-time.model';
import { JsonAppConfigService } from './json-app-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetZADataOverTime()
  {
    
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    
    return this.http.get<Array<DataOverTime>>(baseEndpoint + "Data/SouthAfricaOverTime");
  }
}
