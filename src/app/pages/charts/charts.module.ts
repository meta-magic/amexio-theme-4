/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChartsComponent} from "./charts.component";
import {AmexioWidgetModule,AmexioChartsModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: ChartsComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,AmexioChartsModule
  ],
  exports: [RouterModule],
  declarations : [
    ChartsComponent
  ],
  providers : []
})
export class ChartsModule { }
