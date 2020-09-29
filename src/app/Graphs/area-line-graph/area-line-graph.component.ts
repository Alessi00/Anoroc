import { Component, OnInit } from '@angular/core';
import { data } from 'azure-maps-control';
import {Chart, ChartDataSets} from 'chart.js'
import { PredictionModel } from 'src/app/Models/prediction-model.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-area-line-graph',
  templateUrl: './area-line-graph.component.html',
  styleUrls: ['./area-line-graph.component.sass']
})
export class AreaLineGraphComponent implements OnInit {

  
  areachart: Chart;
  letters = '0123456789ABCDEF';
  _DataService : DataService; 
  Predicitons: Array<PredictionModel>;
  myDatasource: ChartDataSets;
 	 constructor(dataservice: DataService) 
  	{
		  this._DataService = dataservice;
		  
		this._DataService.GetPredicitonArea().subscribe(response => {
			console.log(response);
			response.forEach(area => {
				var newdataset = {
					label: area.Suburb,
					backgroundColor:'rgb(236,76,76)',
					borderColor: this.getRandomColor(),
					data: area.Values,
					fill: false,
				};
				if(this.areachart.data.datasets == null)
				{
					this.areachart.data.datasets = [newdataset];
				}
				else
				{
					this.areachart.data.datasets?.push(newdataset);
				}
			});
			this.areachart.update();
		})
	}
  innerWidth: any;
  	getRandomColor() 
  	{
		var color = '#';

		for (var i = 0; i < 6; i++) 
		{
			color += this.letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

  ngOnInit(): void 
  {
	this.innerWidth = window.innerWidth;
	if(this.innerWidth <= 1280)
	{
	  var canvasobj = document.getElementsByTagName('canvas')[1];
      canvasobj.width  = 500;
      canvasobj.height = 250;
	}
    else if(this.innerWidth <= 1550)
    {
      var canvasobj = document.getElementsByTagName('canvas')[1];
      canvasobj.width  = 600;
      canvasobj.height = 300;
	}
	else
    {
      var canvasobj = document.getElementsByTagName('canvas')[1];
      canvasobj.width  = 750;
      canvasobj.height = 400;
    }
	
    this.areachart = new Chart('areaChart', {
			type: 'line',
			data: {
				labels: ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days'],
				datasets: []
			},
			options: {
        responsive: false,
        maintainAspectRatio: true,
				title: {
					display: true,
					text: ['Predicition of Suburb Cases using Singular Spectrum Analysis Forecast Machine Learning Model', 'Showing Top 5 Suburbs']
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Days Predicition'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Cases'
						}
					}]
				}
			}
		});
  }

}
