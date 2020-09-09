import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { MapComponent } from './Map/map/map.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JsonAppConfigService } from './Services/json-app-config.service';

export function initializeApp(appConfig: JsonAppConfigService) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    JsonAppConfigService,
    { 
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [JsonAppConfigService], multi: true 
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
