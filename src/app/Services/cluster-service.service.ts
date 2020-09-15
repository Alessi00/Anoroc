import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../Models/token.model';
import { JsonAppConfigService } from './json-app-config.service';
import { Cluster } from '../Models/cluster.model';
import { Observable } from 'rxjs';
import { ClusterPins } from '../Models/cluster-pins.model';


@Injectable()
export class ClusterServiceService {

  token: Token;
  day: Number;
  ClusterList: Array<Cluster>;
  constructor(private http: HttpClient) 
  {
    
  }
 
  getClusters() : Observable<Array<ClusterPins>>
  {
    this.token = new Token();
    this.token.access_token = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocKey ?
                              JsonAppConfigService.settings.AnorocKey.access_token : '';
    this.day = 2;
    this.token.Object_To_Server = this.day.toString();

    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';

    return this.http.post<Array<ClusterPins>>(baseEndpoint + "Cluster/Pins", this.token);
  }

  getOldCluster(_day) : Observable<Array<ClusterPins>>
  {
    this.token = new Token();
    this.token.access_token = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocKey ?
                              JsonAppConfigService.settings.AnorocKey.access_token : '';

    this.token.Object_To_Server = _day.toString();

    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
                       JsonAppConfigService.settings.AnorocEndpoint : '';

    return this.http.post<Array<ClusterPins>>(baseEndpoint + "Cluster/OldClusterPins", this.token);
  }
}
