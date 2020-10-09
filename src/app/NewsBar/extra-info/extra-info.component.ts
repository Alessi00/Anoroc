import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.sass']
})
export class ExtraInfoComponent implements OnInit {

  router: Router;
  constructor(private r: Router) 
  {
    this.router = r;
  }

  ngOnInit(): void {
  }

  routePrivacy()
  {
    this.router.navigate(['/privacyInfo']);
  }
  downloadAppBtn()
  {
    window.open("https://anorocb2cloginwebsite.blob.core.windows.net/anorocmobileapp/com.anorocmobileapp-Signed.apk");
  }
}
