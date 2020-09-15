import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-area-line-graph',
  templateUrl: './area-line-graph.component.html',
  styleUrls: ['./area-line-graph.component.sass']
})
export class AreaLineGraphComponent implements OnInit {

  
  areachart: Chart;
  letters = '0123456789ABCDEF';
  constructor() { }

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
    this.areachart = new Chart('areaChart', {
			type: 'line',
			data: {
				labels: ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days'],
				datasets: [{
					label: 'Silveroaks Shopping Center',
					backgroundColor:'rgb(236,76,76)',
					borderColor: this.getRandomColor(),
					data: [
						12,
						23,
						34,
						45,
						23,
						65,
						12
					],
					fill: false,
				}, {
					label: 'Menlyn',
					fill: false,
					backgroundColor: 'rgb(236,76,76)',
					borderColor: this.getRandomColor(),
					data: [
						34,
						23,
						76,
						34,
						43,
						23,
            76
					],
				}]
			},
			options: {
        responsive: true,
        maintainAspectRatio: true,
				title: {
					display: true,
					text: 'Predicition of Suburb Cases using Custom Machine Learning'
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
