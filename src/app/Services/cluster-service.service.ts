import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../Models/token.model';
import { JsonAppConfigService } from './json-app-config.service';


@Injectable({
  providedIn: 'root'
})
export class ClusterServiceService {

  token: Token;
  constructor(private http: HttpClient) 
  {
    
  }
  day: Number;
  getClusters()
  {
    this.token = new Token();
    this.token.access_token = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocKey ?
                              JsonAppConfigService.settings.AnorocKey.access_token : '';

    
    this.day = 2;
    this.token.Object_To_Server = this.day.toString();
  

    var anorocJson;
    this.http.post<Token>("https://192.168.3.105:5001/Cluster/Simplified", this.token).subscribe(responseData => {
      anorocJson = responseData;
      console.log(responseData);
    });
  }
}
