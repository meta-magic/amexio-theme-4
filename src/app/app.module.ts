import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CookieService} from 'ngx-cookie-service';
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule,  CommonDataService,
  DeviceQueryService,IconLoaderService,AmexioChartsModule
} from "amexio-ng-extensions";
import {DashboardComponent} from "./pages/dashboardex/dashboardex.component";
import {SampleFormComponent} from "./pages/sampleformex/sampleformex.component";
import {FormsModule} from "@angular/forms";

const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: 'email', loadChildren: './pages/email/email.module#EmailModule'
  },
  {
    path: 'layout', loadChildren: './pages/layout/layout.module#LayoutModule'
  },
  {
    path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule'
  },
  {
    path:'group-by-issue',loadChildren:'./pages/report/groupbyissue/groupbyissue.module#GroupbyIssueModule'
  },
  {
    path:'issue',loadChildren:'./pages/report/issue/issue.module#IssueModule'
  },
  {
    path:'issuestatus',loadChildren:'./pages/issuestatus/issuestatus.module#IssueStatusModule'
  },
  {
    path:'charts',loadChildren:'./pages/charts/charts.module#ChartsModule'
  },
  {
    path:'maps',loadChildren:'./pages/maps/maps.module#MapsModule'
  },
  {
    path:'dashboard',loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path:'home',loadChildren:'./pages/home/home.module#HomeModule'
  },
  {
    path: 'employee-registration',
    loadChildren: './pages/pages/employeeregistration/employeeregistration.module#EmployeeRegistrationModule'
  },
  {
    path: 'login', loadChildren: './pages/pages/login/login.module#LoginModule'

  },
  {
    path: 'sample', loadChildren: './pages/pages/sample/sample.module#SampleModule'
  },
  {
    path: 'datagrid', loadChildren: './pages/datagrid/datagrid.module#DataGridModule'
  },
  {
    path : 'action' , loadChildren : './pages/action/action#ActionRoutingModule'
  },
  {
    path : 'formutils', loadChildren : './pages/formsutil/formsutil#FormUtilsRoutingModule'
  },
  {
    path: 'navigation', loadChildren: './pages/navigation/navigation.module#NavigationModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SampleFormComponent,
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioLayoutModule,
    FormsModule,AmexioNavModule,
    RouterModule.forRoot(route,{useHash:true}),
    AmexioLayoutModule,AmexioFormsModule,

  ],
  providers: [DeviceQueryService,CommonDataService,IconLoaderService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
