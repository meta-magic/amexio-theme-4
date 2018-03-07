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
       Amexio Forms Utilities
     </amexio-header>
     <amexio-body>

       <amexio-row>
         <amexio-column [size]="12">
           <h2>Rating Component</h2>
         </amexio-column>
       </amexio-row>

       <amexio-row>
        <amexio-column size="6">
          <amexio-rating-input [max]="5" [(ngModel)]="rate" [full-icon]="'☑'" [empty-icon]="'☐'"></amexio-rating-input>
          <b><p>Rated : {{rate}}</p></b>
        </amexio-column>
         
         <amexio-column size="6">
           <amexio-rating-input [max]="10" [(ngModel)]="rate1"></amexio-rating-input>
           <b><p>Rated : {{rate1}}</p></b>
         </amexio-column>
       </amexio-row>
<amexio-row>
<amexio-column [size]="12">
<amexio-toggle [field-label]="'Round Toogle'">
</amexio-toggle>
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
           <amexio-progress-bar [current-value]="'50'" [infinite]="false" type="primary"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'80'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'100'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <h3>Warning</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'30'" [infinite]="false" type="warning"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'55'" [infinite]="false" type="warning"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'95'" [infinite]="false" type="warning"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>

       <amexio-row>
         <h3>Success</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'45'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'63'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'99'" [infinite]="false" type="success"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <h3>Danger</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'54'" [infinite]="false" type="danger"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'32'" [infinite]="false" type="danger"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'85'" [infinite]="false" type="danger"></amexio-progress-bar>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <h3>Infinite</h3>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'54'" [infinite]="true" type="danger"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'32'" [infinite]="true" type="success"></amexio-progress-bar>
         </amexio-column>
         <amexio-column [size]="4">
           <amexio-progress-bar [current-value]="'85'" [infinite]="true" type="warning"></amexio-progress-bar>
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
             [field-label]="'Date Of Birth'"
             [time-picker]="false"
             [date-picker]="true"
             [(ngModel)]="currentDate">
           </amexio-date-time-picker>
         </amexio-column>

         <amexio-column [size]="6">
           <amexio-date-time-picker
             [field-label]="'Date Of Birth'"
             [time-picker]="true"
             [date-picker]="false"
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
           <amexio-item-selector [height]="200" [display-field]="'countryName'"
                                 [value-field]="'countryId'"
                                 [http-url]="'assets/data/itemdata.json'"
                                 [http-method]="'get'" [data-reader]="'data'" >
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
                 <amexio-text-input [field-label]="'Name'" name="country"
                                    [place-holder]="'Enter name'"
                                    [enable-popover]="true"
                                    [icon-feedback]="true"
                                    [allow-blank]="false" [error-msg]="'Please enter name'"
                                    [min-length]="3" [max-length]="15" [min-error-msg]="'Name should be minimum 3 characters'"
                                    [max-error-msg]="'Name should be less than 15 characters'"
                 >
                 </amexio-text-input>
               </amexio-column>
               <amexio-column [size]="6">
                 <amexio-text-input [field-label]="'Surname'" name="name"
                                    [place-holder]="'Enter surname'"
                                    [enable-popover]="true"
                                    [icon-feedback]="true"
                                    [allow-blank]="false" [error-msg]="'Please enter Surname'"
                                    [min-length]="3" [max-length]="15" [min-error-msg]="'Surname should be minimum 3 characters'"
                                    [max-error-msg]="'Surname should be less than 15 characters'"
                 >
                 </amexio-text-input>
               </amexio-column>
             </amexio-row>
             <amexio-row>
               <amexio-column [size]="6">

                 <amexio-textarea-input [field-label]="'Address'" name="Address"
                                        [place-holder]="'Enter address'"
                                        [error-msg]="'Please enter address'"
                                        [icon-feedback]="true"
                                        [rows]="'5'" [columns]="'2'"
                                        [allow-blank]="false" [enable-popover]="true"

                 >
                 </amexio-textarea-input>


               </amexio-column>
               <amexio-column [size]="6">
                 <amexio-typeahead [data-reader]="'response.data'"
                                   [http-url]="'assets/data/country.json'"
                                   [http-method]="'get'"
                                   [key]="'countryName'"

                                   [field-label]="'Nationality'" [place-holder]="'Search'">
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
         <amexio-column [size]="4">
             <amexio-image [path]="'assets/images/logos/amexio-logo.png'"></amexio-image>
         </amexio-column>
       </amexio-row>


       <amexio-row>
         <amexio-column size="6"><h2>Notfication</h2></amexio-column>
       </amexio-row>
       
       <amexio-row>
         <amexio-column size="3"><amexio-button [type]="'success'" [label]="'Top Right'" (onClick)="toggleMsgArrayR.push('New Message Recieved')"></amexio-button></amexio-column>
         <amexio-column size="3"><amexio-button [type]="'warning'" [label]="'Top Left'" (onClick)="toggleMsgArrayL.push('Check Your inbox')"></amexio-button></amexio-column>
       </amexio-row>

       <amexio-notification [data]="toggleMsgArrayR" [vertical-position]="'top'" [horizontal-position]="'right'"></amexio-notification>
       <amexio-notification [data]="toggleMsgArrayL" [vertical-position]="'top'" [horizontal-position]="'left'"></amexio-notification>
       
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
           <amexio-fileupload [droppable]="true" [field-label]="'Photo Upload'"></amexio-fileupload>
         </amexio-column>
       </amexio-row>
       <amexio-row>
       <amexio-column [size]="12">
       <amexio-label size="large">Label Component with box</amexio-label>
       <!-- <amexio-row><amexio-column [size]="4">
        <amexio-label size="large">This is large amexio label</amexio-label>
      </amexio-column>
      <amexio-column [size]="4">
        <amexio-label size="large-bold">This is large-bold amexio label</amexio-label>
      </amexio-column>
      <amexio-column [size]="4">
    
        <amexio-label size="medium-bold">This is medium-bold amexio label</amexio-label>
        </amexio-column>
       </amexio-row>
       <amexio-row>        <amexio-column [size]="4">
        <amexio-label>This is small amexio label</amexio-label>
      </amexio-column>
        <amexio-column [size]="4">
        <amexio-label size="small-bold">This is small-bold amexio label</amexio-label>
      </amexio-column>
        <amexio-column [size]="4">
        <amexio-label size="medium-bold" font-color="#FF5733">This is  amexio label</amexio-label>
      </amexio-column>
      </amexio-row> -->
        <amexio-box border-color ="red" border="top" padding="true">
           <amexio-label  border="top">This is small-bold amexio label with border</amexio-label>
        </amexio-box>
        <amexio-box border-color ="blue" border="bottom" padding="true">
          <amexio-label  border="bottom">This is small-bold amexio label with border</amexio-label>
        </amexio-box>
      <amexio-box border-color ="pink" border="right" padding="true">
        <amexio-label  border="right">This is small-bold amexio label with border</amexio-label>
      </amexio-box>
      <amexio-box border-color ="green" border="left" padding="true">
        <amexio-label  border="left">This is small-bold amexio label with border</amexio-label>
      </amexio-box>
      <amexio-box background-color="highlight" padding="true">
        <amexio-label  background-color="highlight">This is small-bold amexio label with background-color</amexio-label>
     </amexio-box>  
     <amexio-box background-color="yellow" padding="true">
        <amexio-label  background-color="yellow">This is small-bold amexio label with background-color</amexio-label>
      </amexio-box>  
      <amexio-box background-color="grey" padding="true">
        <amexio-label  background-color="grey">This is small-bold amexio label with background-color</amexio-label>
      </amexio-box>  
      <amexio-box background-color="blue" padding="true">
        <amexio-label  background-color="blue">This is small-bold amexio label with background-color</amexio-label>
      </amexio-box>  
        
        <amexio-box border-color ="amber" border="bottom" padding="true" background-color="yellow">
        <amexio-label >This is small-bold amexio label with background-color</amexio-label>
        </amexio-box>
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
