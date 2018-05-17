/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { LayoutComponent} from "./layout.component";
import {AmexioFormsModule,AmexioLayoutModule,
  AmexioPaneModule,AmexioDataModule,AmexioNavModule} from "amexio-ng-extensions";
import { DyanmicTabComponent } from './dynamictabdemo.component';

const routes: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    AmexioPaneModule,
    AmexioDataModule,
    AmexioNavModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[DyanmicTabComponent],
  exports: [RouterModule],
  declarations : [
    LayoutComponent,
    DyanmicTabComponent
  ],
  providers : []
})
export class LayoutModule {}
