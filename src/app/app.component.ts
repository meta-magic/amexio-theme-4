import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nodeClick(data){
    console.log(JSON.stringify(data));
  }
  constructor(private _router : Router){}
  routeToLink(data: any){
    if(!data.hasOwnProperty('children') && data.link)
      this._router.navigate([data.link]);
  }
}
