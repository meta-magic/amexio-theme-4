/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard.component";
import {AmexioWidgetModule,AmexioChartsModule,AmexioDashBoardModule,ChartLoaderService,DashboardLoaderService} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,AmexioChartsModule,AmexioDashBoardModule
  ],
  exports: [RouterModule],
    providers : [ChartLoaderService,DashboardLoaderService],
  declarations : [
    DashboardComponent
  ]
})
export class DashboardModule { }
