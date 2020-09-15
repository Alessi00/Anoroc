import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { DataOverTime } from 'src/app/Models/data-over-time.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.sass']
})
export class LinegraphComponent implements OnInit {

  ZA_DataOverTime: Array<DataOverTime>;

  constructor(private dataService: DataService) 
  {
    this.keys = new Array<string>();
    this._data = new Array<number>();
  }

  chart: Chart;
  areaChart: Chart;
  keys: Array<string>;
  _data: Array<number>;
  months = ["Janruary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  ContainsMonth(addedMonth: Array<number>, month: number)
  {
    for(var i = 0; i < addedMonth.length; i++)
    {
      if(addedMonth[i] == month)
      {
         return true; 
      }
    }
    return false;
  }

  ngOnInit(): void {
    var options = {
			maintainAspectRatio: true,
			spanGaps: false,
			elements: {
				line: {
					tension:  0.4
				}
			},
			plugins: {
				filler: {
					propagate: false
				}
			},
			scales: {
				xAxes: [{
					ticks: {
						autoSkip: false,
						maxRotation: 0
					}
				}]
			}
		};
    var addedMonth = new Array<number>();
    var currentYear= 0;
    var monthTotal = 0;
    this.dataService.GetZADataOverTime().subscribe(response => {
      this.ZA_DataOverTime = response;

      for(let i = 0; i < this.ZA_DataOverTime.length-1; i++)
      {
        if((+this.ZA_DataOverTime[i].dateTime.substring(5,7)) != +this.ZA_DataOverTime[i+1].dateTime.substring(5,7))
        {
          this.keys.push(this.months[+this.ZA_DataOverTime[i].dateTime.substring(5,7)-1]);
          this._data.push(this.ZA_DataOverTime[i].totalCases);
        }
      }

      this.keys.push(this.months[+this.ZA_DataOverTime[this.ZA_DataOverTime.length-1].dateTime.substring(5,7)-1]);
      this._data.push(this.ZA_DataOverTime[this.ZA_DataOverTime.length-1].totalCases);


      this.chart = new Chart('canvasChart', {
        type: 'line',
        data: {
          labels: this.keys,
          datasets: [{
            backgroundColor: 'rgba(138,43,226,0.5)',
            borderColor: 'rgb(47,79,79)',
            data: this._data,
            label: 'Total Cases',
            fill: 'start'
          }]
        },
        options: Chart.helpers.merge(options, {
          title: {
            text: 'Last Updated: ' + this.ZA_DataOverTime[this.ZA_DataOverTime.length-1].dateTime.substring(0,10),
            display: true
          }
        })
      });
    });
  }
}
