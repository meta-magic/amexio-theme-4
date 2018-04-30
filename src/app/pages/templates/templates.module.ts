/**
 * Created by dattaram on 13/1/18.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AmexioDataModule, AmexioWidgetModule, CommonDataService} from "amexio-ng-extensions";
import {TemplatesGridComponent} from "./templates.component";

const routes: Routes = [
  { path: '', component: TemplatesGridComponent }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
    AmexioDataModule
  ],
  exports: [RouterModule],
  declarations : [
    TemplatesGridComponent
  ],
  providers : [CommonDataService]
})
export class TemplateGridModule { }
