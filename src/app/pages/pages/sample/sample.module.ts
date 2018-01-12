/**
 * Created by ketangote on 8/17/17.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule,AmexioFormsModule} from "amexio-ng-extensions";
import {SampleComponent} from "./sample.component";

const routes: Routes = [
  { path: '', component: SampleComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,AmexioFormsModule
  ],
  exports: [RouterModule],
  declarations : [
    SampleComponent
  ],
  providers : []
})
export class SampleModule { }
