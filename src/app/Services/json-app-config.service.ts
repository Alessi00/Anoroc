import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '../Models/iapp-config.interface';
@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService 
{
  static settings: IAppConfig;
  http: HttpClient;
  constructor(private _http: HttpClient) {
    this.http = _http;
   }
  load() 
  {
    const jsonFile = 'assets/config/config.dev.json';
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        JsonAppConfigService.settings = <IAppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
