import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { MapComponent } from './Map/map/map.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JsonAppConfigService } from './Services/json-app-config.service';
import { ClusterServiceService } from './Services/cluster-service.service';
import { FormsModule } from '@angular/forms';
import { LinegraphComponent } from './Graphs/TotalCases/linegraph/linegraph.component';
import { AreaLineGraphComponent } from './Graphs/area-line-graph/area-line-graph.component';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { PrivacyInfoPageComponent } from './GDPR/privacy-info-page/privacy-info-page.component';
import { AIInfoPageComponent } from './AI/aiinfo-page/aiinfo-page.component';
import { ForecastGraphComponent } from './Graphs/forecast-graph/forecast-graph.component';
import { ExtraInfoComponent } from './NewsBar/extra-info/extra-info.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent } from './Graphs/line-chart/line-chart.component';
import { Chart } from 'chart.js';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StackedBarChartComponent } from './Graphs/stacked-bar-chart/stacked-bar-chart.component';
export function initializeApp(appConfig: JsonAppConfigService) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    LinegraphComponent,
    AreaLineGraphComponent,
    MainPageComponent,
    PrivacyInfoPageComponent,
    AIInfoPageComponent,
    ForecastGraphComponent,
    ExtraInfoComponent,
    LineChartComponent,
    StackedBarChartComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ClusterServiceService,
    HttpClient,
    JsonAppConfigService,
    { 
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [JsonAppConfigService], multi: true 
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
