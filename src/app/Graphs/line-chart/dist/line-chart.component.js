"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LineChartComponent = void 0;
var core_1 = require("@angular/core");
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [54, 57, 58, 59, 60, 62, 63], label: 'Upper bound' },
            { data: [50, 47, 45, 43, 42, 41, 41], label: 'Forecast' },
            { data: [45, 42, 40, 38, 36, 35, 33], label: 'Lower Bound' }
        ];
        this.chartLabels = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days'];
        this.chartColors = [
            {
                backgroundColor: 'rgba(105, 0, 131, .2)',
                borderColor: 'rgba(200, 99, 132, .7)',
                borderWidth: 2
            },
            {
                backgroundColor: 'rgba(0, 137, 132, .2)',
                borderColor: 'rgba(0, 10, 130, .7)',
                borderWidth: 2
            }
        ];
        this.chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: ['Minimum and Maximum Forcast graph']
            }
        };
    }
    LineChartComponent.prototype.chartClicked = function (e) { };
    LineChartComponent.prototype.chartHovered = function (e) { };
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent = __decorate([
        core_1.Component({
            selector: 'app-line-chart',
            templateUrl: './line-chart.component.html',
            styleUrls: ['./line-chart.component.sass']
        })
    ], LineChartComponent);
    return LineChartComponent;
}());
exports.LineChartComponent = LineChartComponent;
