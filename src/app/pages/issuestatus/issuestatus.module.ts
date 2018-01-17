/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule,AmexioLayoutModule,AmexioPaneModule} from "amexio-ng-extensions";
import {IssueStatusComponent} from "./issuestatus.component";

const routes: Routes = [
  { path: '', component: IssueStatusComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),AmexioPaneModule,
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations : [
    IssueStatusComponent
  ]
})
export class IssueStatusModule { }
