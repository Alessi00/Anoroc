"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var aiinfo_page_component_1 = require("./AI/aiinfo-page/aiinfo-page.component");
var faqpage_component_1 = require("./FAQ/faqpage/faqpage.component");
var privacy_info_page_component_1 = require("./GDPR/privacy-info-page/privacy-info-page.component");
var main_page_component_1 = require("./MainPage/main-page/main-page.component");
var routes = [
    {
        path: '',
        component: main_page_component_1.MainPageComponent
    },
    {
        path: 'privacyInfo',
        component: privacy_info_page_component_1.PrivacyInfoPageComponent
    },
    {
        path: 'AIInfo',
        component: aiinfo_page_component_1.AIInfoPageComponent
    },
    {
        path: 'FAQinfo',
        component: faqpage_component_1.FAQPageComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
