"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StackedBarChartComponent = void 0;
var core_1 = require("@angular/core");
var StackedBarChartComponent = /** @class */ (function () {
    function StackedBarChartComponent() {
        this.chartType = 'bar';
        this.chartDatasets = [
            { data: [78, 30, 7, 7, 0.95, 3.253, 4.128], label: 'Training Details' },
        ];
        this.chartLabels = ['Training Simple', 'Series Length', 'Window size', 'Confidence', 'Mean Absolute Error ', 'Root Mean Squared Error'];
        this.chartColors = [
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
                borderWidth: 2
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
                borderWidth: 2
            },
        ];
        this.chartOptions = {
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
    }
    StackedBarChartComponent.prototype.chartClicked = function (e) { };
    StackedBarChartComponent.prototype.chartHovered = function (e) { };
    StackedBarChartComponent.prototype.ngOnInit = function () {
    };
    StackedBarChartComponent = __decorate([
        core_1.Component({
            selector: 'app-stacked-bar-chart',
            templateUrl: './stacked-bar-chart.component.html',
            styleUrls: ['./stacked-bar-chart.component.sass']
        })
    ], StackedBarChartComponent);
    return StackedBarChartComponent;
}());
exports.StackedBarChartComponent = StackedBarChartComponent;
