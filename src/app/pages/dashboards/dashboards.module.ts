/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DashboardsComponent} from "./dashoboards.component";
import {AmexioWidgetModule,AmexioChartsModule,AmexioDashBoardModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: DashboardsComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,AmexioChartsModule,AmexioDashBoardModule
  ],
  exports: [RouterModule],
  declarations : [
    DashboardsComponent
  ]
})
export class DashboardsModule { }
