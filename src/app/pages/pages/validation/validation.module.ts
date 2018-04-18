/**
 * Created by ketangote on 8/17/17.
 */

import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { AmexioWidgetModule,AmexioFormsModule} from "amexio-ng-extensions";
import { ValidationComponent} from "./validation.component";
const routes: Routes = [
  { path: '', component: ValidationComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,AmexioFormsModule
  ],
  exports: [RouterModule],
  declarations : [
    ValidationComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers : []
})
export class ValidationModule { }
