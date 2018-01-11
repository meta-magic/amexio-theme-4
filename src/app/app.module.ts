import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule, AmexioDashBoardModule, CommonDataService,
  DeviceQueryService, AmexioChartsModule,ChartLoaderService
} from "amexio-ng-extensions";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SampleFormComponent} from "./pages/sampleform/sampleform.component";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SampleFormComponent
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
