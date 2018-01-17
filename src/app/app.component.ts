import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any = [];
  httpResponse: any;
  menuData: any[] = [];
  flag: boolean;

  nodeClick(data) {
    console.log(JSON.stringify(data));
  }

  routeToLink(data: any) {
    console.log(JSON.stringify(data));
    if (!data.hasOwnProperty('children') && data.link) this._router.navigate([data.link]);
  }

  constructor(public _http: Http, private _router: Router) {
    this.flag = false;
    this._http.get('assets/data/menus/topmenu.json').subscribe(response => {
      this.httpResponse = response.json()
    }, error => {
      //prompt on error
    }, () => {
      this.menuData = this.httpResponse.menus;
    });
    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.id = 'mdb_theme';
    linkEl.href ='assets/themes/mdb-blue.css';
    document.head.appendChild(linkEl);
  }

  onClick(menuItem: any) {
    debugger;
    if (menuItem.menuId && menuItem.menuId == 1) {
      this._router.navigate(['dashboard']);
    }
    if (menuItem.menuId && menuItem.menuId == 2) {
      this.data.push({'msg': 'You have new email', 'type': 'info'});
    }
  }
  //Window Open
  toggle(){
    this.flag = !this.flag;
  }
  themeChange(theme:any) {
    debugger;
    let newThemePath='assets/themes/'+theme.themeCssFile+'.css';
    let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
    this.removeExistingTheme(currentTheme);
    this.addNewTheme(newThemePath);
    this.toggle();
  }
  addNewTheme(newTheme:any){
    debugger;
    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.id = 'mdb_theme';
    linkEl.href =newTheme;
    document.head.appendChild(linkEl);
  }

  //removed old theme css
  removeExistingTheme(keyList: any) {
    if (keyList != null && keyList && keyList.length != 0) {
      keyList.forEach((key) => {
        document.head.removeChild(key);
      });
    }
  }
}
