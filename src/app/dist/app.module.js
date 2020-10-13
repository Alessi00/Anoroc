"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.initializeApp = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./Header/header/header.component");
var map_component_1 = require("./Map/map/map.component");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var json_app_config_service_1 = require("./Services/json-app-config.service");
var cluster_service_service_1 = require("./Services/cluster-service.service");
var forms_1 = require("@angular/forms");
var linegraph_component_1 = require("./Graphs/TotalCases/linegraph/linegraph.component");
var area_line_graph_component_1 = require("./Graphs/area-line-graph/area-line-graph.component");
var main_page_component_1 = require("./MainPage/main-page/main-page.component");
var privacy_info_page_component_1 = require("./GDPR/privacy-info-page/privacy-info-page.component");
var aiinfo_page_component_1 = require("./AI/aiinfo-page/aiinfo-page.component");
var extra_info_component_1 = require("./NewsBar/extra-info/extra-info.component");
var faqpage_component_1 = require("./FAQ/faqpage/faqpage.component");
function initializeApp(appConfig) {
    return function () { return appConfig.load(); };
}
exports.initializeApp = initializeApp;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                map_component_1.MapComponent,
                linegraph_component_1.LinegraphComponent,
                area_line_graph_component_1.AreaLineGraphComponent,
                main_page_component_1.MainPageComponent,
                privacy_info_page_component_1.PrivacyInfoPageComponent,
                aiinfo_page_component_1.AIInfoPageComponent,
                extra_info_component_1.ExtraInfoComponent,
                faqpage_component_1.FAQPageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_2.HttpClientModule,
                http_1.HttpModule,
                forms_1.FormsModule,
            ],
            providers: [
                cluster_service_service_1.ClusterServiceService,
                http_2.HttpClient,
                json_app_config_service_1.JsonAppConfigService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: initializeApp,
                    deps: [json_app_config_service_1.JsonAppConfigService], multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
