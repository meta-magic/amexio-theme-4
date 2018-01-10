import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, AmexioDashBoardModule, CommonDataService,
  DeviceQueryService, AmexioChartsModule,ChartLoaderService
} from "amexio-ng-extensions";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioDashBoardModule,
    AmexioLayoutModule,
    AmexioChartsModule

  ],
  providers: [DeviceQueryService,CommonDataService, ChartLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
