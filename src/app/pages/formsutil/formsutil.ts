/**
 * Created by pratik on 13/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmexioFormsModule, AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";

@Component({
 selector: 'forms-utils',
 template : `

   <amexio-card [header]="true">

     <amexio-header>
       Amexio Forms Utilities.
     </amexio-header>
     <amexio-body>

       <amexio-row>
         <amexio-column [size]="12">
           <h2>Rating Component</h2>
         </amexio-column>
       </amexio-row>

       <amexio-row>
        <amexio-column size="6">
          <amexio-rating-input [max]="5" [(ngModel)]="rate" [fullicon]="'☑'" [emptyicon]="'☐'"></amexio-rating-input>
          <b><p>Rated : {{rate}}</p></b>
        </amexio-column>
         
         <amexio-column size="6">
           <amexio-rating-input [max]="10" [(ngModel)]="rate1"></amexio-rating-input>
           <b><p>Rated : {{rate1}}</p></b>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <amexio-column [size]="12">
           <h2>Progress Bar</h2>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <h3>Primary</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'50'" [infinite]="false" type="primary"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'80'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'100'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <h3>Warning</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'30'" [infinite]="false" type="warning"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'55'" [infinite]="false" type="warning"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'95'" [infinite]="false" type="warning"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <h3>Success</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'45'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'63'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'99'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <h3>Danger</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'54'" [infinite]="false" type="danger"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'32'" [infinite]="false" type="danger"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'85'" [infinite]="false" type="danger"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <h3>Infinite</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'54'" [infinite]="true" type="danger"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'32'" [infinite]="true" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [currentvalue]="'85'" [infinite]="true" type="warning"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <amexio-column [size]="6">
           <h2>Date & Time Picker</h2>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <amexio-column [size]="6">
           <amexio-date-time-picker
             [fieldlabel]="'Date Of Birth'"
             [timepicker]="false"
             [datepicker]="true"
             [(ngModel)]="currentDate">
           </amexio-date-time-picker>
         </amexio-column>

         <amexio-column [size]="6">
           <amexio-date-time-picker
             [fieldlabel]="'Date Of Birth'"
             [timepicker]="true"
             [datepicker]="false"
             [(ngModel)]="currentDate1">
           </amexio-date-time-picker>
         </amexio-column>
       </amexio-row>
       
       
       

       <amexio-row>
         <amexio-column [size]="6">
           <h2>Item Selector</h2>
         </amexio-column>
       </amexio-row>
       <amexio-row>
         <amexio-column [size]="12">
           <amexio-item-selector [height]="200" [displayfield]="'countryName'"
                                 [valuefield]="'countryId'"
                                 [httpurl]="'assets/data/itemdata.json'"
                                 [httpmethod]="'get'" [datareader]="'data'" >
           </amexio-item-selector>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <amexio-column [size]="6">
           <h2>Field Set</h2>
         </amexio-column>
       </amexio-row>
       <amexio-row>
         <amexio-column [size]="12">
           <amexio-fieldset [collapsible]="true" title="Employee Registration">
             <amexio-row>
               <amexio-column [size]="6">
                 <amexio-text-input [fieldlabel]="'Name'" name="country"
                                    [placeholder]="'Enter name'"
                                    [enablepopover]="true"
                                    [iconfeedback]="true"
                                    [allowblank]="false" [errormsg]="'Please enter name'"
                                    [minlength]="3" [maxlength]="15" [minerrormsg]="'Name should be minimum 3 characters'"
                                    [maxerrormsg]="'Name should be less than 15 characters'"
                 >
                 </amexio-text-input>
               </amexio-column>
               <amexio-column [size]="6">
                 <amexio-text-input [fieldlabel]="'Surname'" name="name"
                                    [placeholder]="'Enter surname'"
                                    [enablepopover]="true"
                                    [iconfeedback]="true"
                                    [allowblank]="false" [errormsg]="'Please enter Surname'"
                                    [minlength]="3" [maxlength]="15" [minerrormsg]="'Surname should be minimum 3 characters'"
                                    [maxerrormsg]="'Surname should be less than 15 characters'"
                 >
                 </amexio-text-input>
               </amexio-column>
             </amexio-row>
             <amexio-row>
               <amexio-column [size]="6">

                 <amexio-textarea-input [fieldlabel]="'Address'" name="Address"
                                        [placeholder]="'Enter address'"
                                        [errormsg]="'Please enter address'"
                                        [iconfeedback]="true"
                                        [rows]="'1'" [columns]="'2'"
                                        [allowblank]="false" [enablepopover]="true"

                 >
                 </amexio-textarea-input>


               </amexio-column>
               <amexio-column [size]="6">
                 <amexio-typeahead [datareader]="'response.data'"
                                   [httpurl]="'assets/data/country.json'"
                                   [httpmethod]="'get'"
                                   [key]="'countryName'"

                                   [fieldlabel]="'Nationality'" [placeholder]="'Search'">
                 </amexio-typeahead>
               </amexio-column>
             </amexio-row>

           </amexio-fieldset>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <amexio-column [size]="6">
           <h2>Paginator Component</h2>
         </amexio-column>
       </amexio-row>
       
       <amexio-row>
         <amexio-column [size]="12">
           <amexio-paginator [pages]="50" [rows]="10"></amexio-paginator>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <amexio-column [size]="6">
           <h2>Image Component</h2>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <amexio-column [size]="12">
             <amexio-image [path]="'https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png'"></amexio-image>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <amexio-column size="6"><h2>Notfication</h2></amexio-column>
       </amexio-row>
       
       <amexio-row>
         <amexio-column size="3"><amexio-button [type]="'success'" [label]="'Top Right'" (onClick)="toggleMsgArrayR.push('New Message Recieved')"></amexio-button></amexio-column>
         <amexio-column size="3"><amexio-button [type]="'warning'" [label]="'Top Left'" (onClick)="toggleMsgArrayL.push('Check Your inbox')"></amexio-button></amexio-column>
       </amexio-row>

       <amexio-notification [messageData]="toggleMsgArrayR" [verticalposition]="'top'" [horizontalposition]="'right'"></amexio-notification>
       <amexio-notification [messageData]="toggleMsgArrayL" [verticalposition]="'top'" [horizontalposition]="'left'"></amexio-notification>
       
       <amexio-row>
         <amexio-column size="6"><h2>Video Player</h2></amexio-column>
       </amexio-row>
       
       <amexio-row>
         <amexio-column size="12">
           <amexio-video-player path="http://www.amexio.org/showcaseapp/v3assets/videos/sample_bunny.mp4"></amexio-video-player>
         </amexio-column>
       </amexio-row>
       
       <amexio-row>
         <amexio-column [size]="6">
           <h2>Fileupload Component</h2>
         </amexio-column>
       </amexio-row>
       
       <amexio-row>
         <amexio-column size="4">
           <amexio-fileupload [droppable]="true"></amexio-fileupload>
         </amexio-column>
       </amexio-row>
       
     </amexio-body>
   </amexio-card>
 `
})

export class FormUtilsComponent implements OnInit {
  rate : number=3;
  rate1 : number = 7;
  currentDate1 : any;
  currentDate:any;
  toggleMsgArrayR : any[] = [];
  toggleMsgArrayL : any[] = [];
 constructor() { }

 ngOnInit() { }
}

const routes: Routes = [
  { path: '', component: FormUtilsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),AmexioWidgetModule,FormsModule],
  exports: [RouterModule],
  declarations : [FormUtilsComponent]
})
export class FormUtilsRoutingModule { }

export const routedComponents = [FormUtilsComponent];
