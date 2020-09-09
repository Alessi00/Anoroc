import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Secrets } from '../Models/secrets.model';
@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService 
{
  constructor(private http: HttpClient) { }

  Secrets: Secrets;

  public getAzureMapsKey(){
    return this.http.get<Secrets>('../secrets.json')
    .toPromise()
    .then(data => {
      this.Secrets.Azure_Maps_Key = data.Azure_Maps_Key;
    })
    .catch(()=>{
      console.log("Could not find secrets.json");
    });
  }
}
