import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataOverTime } from '../Models/data-over-time.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetZADataOverTime()
  {
    return this.http.get<Array<DataOverTime>>("https://anoroc-server.azurewebsites.net/Data/SouthAfricaOverTime");
  }
}
