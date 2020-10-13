import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { PredictionModel } from 'src/app/Models/prediction-model.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.sass']
})
export class StackedBarChartComponent implements OnInit {

  _DataService : DataService; 
  public chartType: string = 'bar';

  //constructor(){}
  public responseData : number[] = [];
  public chartDatasets: Array<any> = [
    { data: [] , label: 'Training Details' },
  ];
  constructor(dataservice: DataService) 
  { 
    this._DataService = dataservice;
    this.getInfo();
  }
  async getInfo()
  {
     this._DataService.GetTrainningData().subscribe(response => {
      this.chartDatasets = [{data: response , label:'Training Details' },];
    })

  }

  ngOnInit(): void {
  }


public chartLabels: Array<any> = ['Training Simple', 'Series Length', 'Window size', 'Confidence', 'Mean Absolute Error ', 'Root Mean Squared Error'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        'rgba(255, 125, 158, 0.2)',
        'rgba(3, 111, 184, 0.2)',
        'rgba(255, 255, 137, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(126, 243, 243, 0.2)',
        'rgba(255, 210, 115, 0.2)'
      ],
      borderColor: [
        'rgba(255, 125, 158, 1)',
        'rgba(3, 111, 184, 1)',
        'rgba(255, 255, 137, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(255, 210, 115, 1)'
      ],
      borderWidth: 2,
    },
    ];

    public chartOptions: any = {
      responsive: true,
      title: {
        display: true,
        text: ['Details of the data used to Train the Model.']
        },
        scales: {
          xAxes: [{
            stacked: true
            }],
          yAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }

}

