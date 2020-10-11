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
  innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth <= 1280)
    {
      var clickheading = document.getElementById('clickheading');
      var gdprpic = document.getElementById('gdprpic');
      var downloadApp = document.getElementById('downloadApp');
      gdprpic.style.width = "10em";
      gdprpic.style.height = "8em";
      clickheading.style.width = "25em";
      clickheading.style.height = "8em";
      downloadApp.style.width = "20em";
    }
    else if(this.innerWidth <= 1550)
    {
      var canvasobj = document.getElementsByTagName('canvas')[0];
      var datasource = document.getElementById('datasourcebtn');
      datasource.style.width = "600px";
      canvasobj.width  = 600;
      canvasobj.height = 280;
      var gdprpic = document.getElementById('gdprpic');
      gdprpic.style.width = "10em";
      gdprpic.style.height = "8em";
    }
    else
    {
      var canvasobj = document.getElementsByTagName('canvas')[0];
      canvasobj.width  = 750;
      canvasobj.height = 350;
      var datasource = document.getElementById('datasourcebtn');
      datasource.style.width = "755px";
    }
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
