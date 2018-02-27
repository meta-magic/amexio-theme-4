/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { EmailComponent} from "./email.component";
import {AmexioFormsModule,AmexioWidgetModule,AmexioLayoutModule,AmexioDataModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: EmailComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    AmexioWidgetModule,
    AmexioFormsModule,AmexioLayoutModule,AmexioDataModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations : [
    EmailComponent
  ],
  providers : []
})
export class EmailModule { }
