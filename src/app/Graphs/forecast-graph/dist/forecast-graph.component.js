"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForecastGraphComponent = void 0;
var core_1 = require("@angular/core");
var ForecastGraphComponent = /** @class */ (function () {
    function ForecastGraphComponent() {
        this.chartType = 'pie';
        this.chartDatasets = [
            { data: [98, 2], label: 'My First dataset' }
        ];
        this.chartLabels = ['Accuracy'];
        this.chartColors = [
            {
                backgroundColor: ['#F7464A'],
                hoverBackgroundColor: ['#FF5A5E'],
                borderWidth: 2
            }
        ];
        this.chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: ['Pie chart showing Accuracy of the AI.']
            }
        };
    }
    ForecastGraphComponent.prototype.chartClicked = function (e) { };
    ForecastGraphComponent.prototype.chartHovered = function (e) { };
    ForecastGraphComponent.prototype.ngOnInit = function () {
    };
    ForecastGraphComponent = __decorate([
        core_1.Component({
            selector: 'app-forecast-graph',
            templateUrl: './forecast-graph.component.html',
            styleUrls: ['./forecast-graph.component.sass']
        })
    ], ForecastGraphComponent);
    return ForecastGraphComponent;
}());
exports.ForecastGraphComponent = ForecastGraphComponent;
