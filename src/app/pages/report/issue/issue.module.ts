/**
 * Created by sagar on 3/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IssueComponent} from "./issue.component";
import {AmexioWidgetModule,AmexioDashBoardModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: IssueComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    AmexioDashBoardModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations : [
    IssueComponent
  ],
  providers : []
})
export class IssueModule { }
