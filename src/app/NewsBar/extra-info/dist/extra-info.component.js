"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExtraInfoComponent = void 0;
var core_1 = require("@angular/core");
var ExtraInfoComponent = /** @class */ (function () {
    function ExtraInfoComponent(r) {
        this.r = r;
        this.router = r;
    }
    ExtraInfoComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        if (this.innerWidth <= 1280) {
            var clickheading = document.getElementById('clickheading');
            var gdprpic = document.getElementById('gdprpic');
            var downloadApp = document.getElementById('downloadApp');
            gdprpic.style.width = "10em";
            gdprpic.style.height = "8em";
            clickheading.style.width = "25em";
            clickheading.style.height = "8em";
            downloadApp.style.width = "20em";
        }
        else if (this.innerWidth <= 1550) {
            var canvasobj = document.getElementsByTagName('canvas')[0];
            var datasource = document.getElementById('datasourcebtn');
            datasource.style.width = "600px";
            canvasobj.width = 600;
            canvasobj.height = 280;
            var gdprpic = document.getElementById('gdprpic');
            gdprpic.style.width = "10em";
            gdprpic.style.height = "8em";
        }
        else {
            var canvasobj = document.getElementsByTagName('canvas')[0];
            canvasobj.width = 750;
            canvasobj.height = 350;
            var datasource = document.getElementById('datasourcebtn');
            datasource.style.width = "755px";
        }
    };
    ExtraInfoComponent.prototype.routePrivacy = function () {
        this.router.navigate(['/privacyInfo']);
    };
    ExtraInfoComponent.prototype.downloadAppBtn = function () {
        window.open("https://anorocb2cloginwebsite.blob.core.windows.net/anorocmobileapp/com.anorocmobileapp-Signed.apk");
    };
    ExtraInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-extra-info',
            templateUrl: './extra-info.component.html',
            styleUrls: ['./extra-info.component.sass']
        })
    ], ExtraInfoComponent);
    return ExtraInfoComponent;
}());
exports.ExtraInfoComponent = ExtraInfoComponent;
