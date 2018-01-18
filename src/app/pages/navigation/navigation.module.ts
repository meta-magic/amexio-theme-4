/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { NavigationComponent } from "./navigation.component";
import {AmexioFormsModule,AmexioNavModule,AmexioLayoutModule,AmexioDataModule,AmexioPaneModule} from "amexio-ng-extensions";
import {TestDockbarComponent} from "../../component/dockedbar/dockbaritem";
import {TestDockedBarToolComponent} from "../../component/dockedbar/dockettoolbar.component";

const routes: Routes = [
  { path: '', component: NavigationComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    AmexioFormsModule,AmexioNavModule,AmexioDataModule,AmexioLayoutModule,AmexioPaneModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations : [
    NavigationComponent,
    TestDockbarComponent,
    TestDockedBarToolComponent
  ],
  providers : []
})
export class NavigationModule { }
