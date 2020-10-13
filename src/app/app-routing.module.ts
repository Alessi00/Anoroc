import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AIInfoPageComponent } from './AI/aiinfo-page/aiinfo-page.component';
import { FAQPageComponent } from './FAQ/faqpage/faqpage.component';
import { PrivacyInfoPageComponent } from './GDPR/privacy-info-page/privacy-info-page.component';
import { MainPageComponent } from './MainPage/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'privacyInfo',
    component: PrivacyInfoPageComponent
  },
  {
    path: 'AIInfo',
    component: AIInfoPageComponent
  },
  {
    path: 'FAQinfo',
    component: FAQPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
