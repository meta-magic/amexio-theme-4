/**
 * Created by pratik on 13/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmexioWidgetModule} from "amexio-ng-extensions";

@Component({
 selector: 'forms-utils',
 template : `
  
 <h1>Forms util</h1>
 `
})

export class FormUtilsComponent implements OnInit {
 constructor() { }

 ngOnInit() { }
}

const routes: Routes = [
  { path: '', component: FormUtilsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),AmexioWidgetModule],
  exports: [RouterModule],
  declarations : [FormUtilsComponent]
})
export class FormUtilsRoutingModule { }

export const routedComponents = [FormUtilsComponent];
