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
import {TestAmexioWindowPaneComponent} from "../../component/window.pane.component";

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
  exports: [RouterModule],
  declarations : [
    LayoutComponent,
    TestAmexioWindowPaneComponent
  ],
  providers : []
})
export class LayoutModule {}
