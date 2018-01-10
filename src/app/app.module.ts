import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, CommonDataService,
  DeviceQueryService
} from "amexio-ng-extensions";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmexioFormsModule,
    AmexioNavModule,
    AmexioLayoutModule

  ],
  providers: [DeviceQueryService,CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
