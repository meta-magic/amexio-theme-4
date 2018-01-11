import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule,  CommonDataService,
  DeviceQueryService,IconLoaderService
} from "amexio-ng-extensions";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SampleFormComponent} from "./pages/sampleform/sampleform.component";
import {AmexioItemSelectorComponent1} from "./pages/sampleform/item.selector.component";




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SampleFormComponent,
    AmexioItemSelectorComponent1
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioLayoutModule

  ],
  providers: [DeviceQueryService,CommonDataService,IconLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
