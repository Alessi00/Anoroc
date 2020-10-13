import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {Chart, ChartDataSets} from 'chart.js'
import { DataService } from 'src/app/Services/data.service';

@Component({

  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

  _DataService : DataService; 
  public chartType: string = 'line';
  public r1 : any;
  public r2 : any;
  public r3 : any;
  public responseData : number[] = [];
  public chartDatasets: Array<any> = [
    { data: [], label: 'Upper bound' },
    { data: [], label: 'Forecast' },
    { data: [], label: 'Lower Bound' }
  ];

  constructor(dataservice: DataService) 
  { 
    this._DataService = dataservice;
    this.updateInfo();
  }
  async updateInfo()
  {
     this._DataService.GetUpperBoundData().subscribe(response1 => {
      this._DataService.GetForecastData().subscribe(response2 => {
        this._DataService.GetLowerBoundData().subscribe(response3 => {
          this.chartDatasets = [  
          { data: response1, label: 'Upper bound' },
          { data: response2, label: 'Forecast' },
          { data:response3, label: 'Lower Bound' }];
        });
      });
    });
   
  }
  public chartLabels: Array<any> = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 131, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    title: {
      display: true,
      text: ['Minimum and Maximum Forcast graph']
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  ngOnInit(): void {
  }

}
