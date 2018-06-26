/**
 * Created by payalk07 on 7/4/18.
 */

import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { AmexioWidgetModule,AmexioFormsModule} from "amexio-ng-extensions";
import { ImagesComponent} from "./images.component";
const routes: Routes = [
  { path: '', component: ImagesComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,AmexioFormsModule
  ],
  exports: [RouterModule],
  declarations : [
    ImagesComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers : []
})
export class ImagesModule { }
