import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data : any=[];
  httpResponse : any;
  menuData : any[] = [];
  nodeClick(data){
    console.log(JSON.stringify(data));
  }

  routeToLink(data: any){
      console.log(JSON.stringify(data));
    if(!data.hasOwnProperty('children') && data.link)
      this._router.navigate([data.link]);
  }

  constructor(public _http : Http,private _router : Router){
    this._http.get('assets/data/menus/topmenu.json').subscribe(
      response=>{
        this.httpResponse = response.json()
      },
      error=>{
        //prompt on error
      },
      ()=>{
        this.menuData = this.httpResponse.menus;
      }
    );
  }
  onClick(menuItem:any){
    debugger;
    if(menuItem.menuId && menuItem.menuId==1){
      this._router.navigate(['dashboard']);
    }
    if(menuItem.menuId && menuItem.menuId==2){
      this.data.push({'msg':'You have new email', 'type' : 'info'});
    }
  }
}
