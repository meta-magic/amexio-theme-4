/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { CarouselDemoComponent } from "./carouseldemo.component";
import {AmexioFormsModule,AmexioLayoutModule,
  AmexioPaneModule,AmexioDataModule,AmexioNavModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component: CarouselDemoComponent }
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
    CarouselDemoComponent
  ],
  providers : []
})
export class CarouselDemoModule {}
