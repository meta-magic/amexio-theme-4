import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  AmexioFormsModule, AmexioNavModule, AmexioWidgetModule, CommonDataService,
  DeviceQueryService
} from "amexio-ng-extensions";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmexioFormsModule,
    AmexioNavModule

  ],
  providers: [DeviceQueryService,CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
