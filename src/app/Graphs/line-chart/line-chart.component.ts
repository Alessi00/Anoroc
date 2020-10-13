import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {Chart, ChartDataSets} from 'chart.js'

@Component({

  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [54,57,58,59,60,62,63], label: 'Upper bound' },
    { data: [50,47,45,43,42,41,41], label: 'Forecast' },
    { data: [45,42,40,38,36,35,33], label: 'Lower Bound' }
  ];

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
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit(): void {
  }

}
