import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.sass']
})
export class ForecastGraphComponent implements OnInit {

  _DataService : DataService; 
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [], label: 'Accuracy' }
  ];

  constructor(dataservice: DataService) 
  { 
    this._DataService = dataservice;
    this.updateInfo();
  }
  async updateInfo()
  {
     this._DataService.GetAccuracyData().subscribe(response => {
      this.chartDatasets = [{data: response , label:'Accuracy'},];
    })
  }

  public chartLabels: Array<any> = ['Accuracy'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A'],
      hoverBackgroundColor: ['#FF5A5E'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    title: {
      display: true,
      text: ['Pie chart showing Accuracy of the AI.']
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  ngOnInit(): void {
  }

}
