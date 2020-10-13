"use strict";
exports.__esModule = true;
exports.Itinerary = void 0;
var Itinerary = /** @class */ (function () {
    function Itinerary() {
    }
    /*constructor(num:Number)
    {
        this.Risk=num;
    }*/
    Itinerary.prototype.getRisk = function () {
        var out = "";
        switch (this.Risk) {
            case 0:
                out = "No Risk";
                break;
            case 1:
                out = "Low Risk";
                break;
            case 2:
                out = "Moderate Risk";
                break;
            case 3:
                out = "Medium Risk";
                break;
            case 4:
                out = "High Risk";
                break;
        }
        return out;
    };
    return Itinerary;
}());
exports.Itinerary = Itinerary;
