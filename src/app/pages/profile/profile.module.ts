/**
 * Created by sagar on 3/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";
//import{AmexioMediaModule} from "amexio-ng-extensions"
const routes: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
//    AmexioMediaModule
  ],
  exports: [RouterModule],
  declarations : [
    ProfileComponent
  ],
  providers : []
})
export class ProfileModule { }
