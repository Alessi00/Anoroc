import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.sass']
})
export class ForecastGraphComponent implements OnInit {

  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [98,2], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Accuracy'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A'],
      hoverBackgroundColor: ['#FF5A5E'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit(): void {
  }

}
