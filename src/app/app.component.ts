import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {CookieService} from 'ngx-cookie-service';
import {AmexioNavBarComponent} from "amexio-ng-extensions";
@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any = [];
  httpResponse: any;
  menuData: any[] = [];
  flag: boolean;
  newThemePath: string;
  msgList: any = [];
  amexioThemeArray: any;
  materialThemeArray : any;

  @ViewChild(AmexioNavBarComponent) amexioNav;

  routeToLink(data: any) {
    if (!data.hasOwnProperty('children') && data.link) this._router.navigate([data.link]);
  }

  constructor(public _http: Http, private _router: Router, private cookieService: CookieService) {
    this.flag = false;

    this._http.get('assets/data/menus/topmenu.json').subscribe(response => {
      this.httpResponse = response.json()
    }, error => {
      //prompt on error
    }, () => {
      this.menuData = this.httpResponse.menus;
    });

    if (this.cookieService.get('theme_name_v4')) {
      let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
      this.removeExistingTheme(currentTheme);
      let linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id = 'themeid';
      linkEl.href = 'assets/themes/' + this.cookieService.get('theme_name_v4') + '.css';
      document.head.appendChild(linkEl);
    } else {
      let linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id = 'themeid';
      linkEl.href = 'assets/themes/at-md-blue.css';
      document.head.appendChild(linkEl);
    }
    //Get Data of Themes
    this.getTheThemesData();
  }

  getTheThemesData() {
    let amexioThemeRepsonse: any;
    let materialThemeResponse: any;
    //HTML FILE
    this._http.get('assets/data/themes/amexio.json').subscribe(data => {
      amexioThemeRepsonse = data.json();
    }, error => {
    }, () => {
      this.amexioThemeArray = amexioThemeRepsonse;
    });

    //HTML FILE
    this._http.get('assets/data/themes/material.json').subscribe(data => {
      materialThemeResponse = data.json();
    }, error => {
    }, () => {
      this.materialThemeArray = materialThemeResponse;
    });
  }

  //on Bell Click
  onBellClick() {
    this.amexioNav.close();
    this.msgList.push('Hello, User');
  }
  onUserClick(){
    this.amexioNav.close();
  }
  onHomeClick(){
    this._router.navigate(['home']);
    this.amexioNav.close();
  }
  //Window Open
  toggle() {
    this.flag = !this.flag;
  }

  themeChange(theme: any) {
    this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
    let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
    this.removeExistingTheme(currentTheme);
    this.addNewTheme(this.newThemePath);
    this.cookieService.set('theme_name_v4', theme.themeCssFile);
    this.toggle();
   // window.location.reload();
    this.amexioNav.close();
  }

  addNewTheme(newTheme: any) {
    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.id = 'themeid';
    linkEl.href = newTheme;
    document.head.appendChild(linkEl);
  }

  //removed old theme css
  removeExistingTheme(keyList: any) {
    if (keyList != null && keyList && keyList.length != 0) {
      keyList.forEach((key) => {
        if (key.id == 'themeid') document.head.removeChild(key);
      });
    }
  }
}
