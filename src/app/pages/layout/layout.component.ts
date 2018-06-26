/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';
import { DyanmicTabComponent } from './dynamictabdemo.component';

@Component({
  selector: 'layout',
  templateUrl: 'layout.html'
})

export class LayoutComponent implements OnInit {
  flag : boolean;
  bindData : any;
  data:any;
  isVisible:boolean;
  viewData:any;
  user:boolean;
  shop:boolean;
  payment:boolean;
  confirmation:boolean;
  clickMsgArray:any=[];
  radioGroupData: any;
  showBasicWindow : boolean;
  showAlertWindow : boolean;
  showClosable : boolean;
  showDialog : boolean;
  public rate: number = 7;
  public max: number = 10;
  public isReadonly: boolean = false;

  constructor() {
    this.user=false;
    this.shop=true;
    this.payment=false;
    this.confirmation=false;
   this.flag=false;
   this.radioGroupData = {
    response: {
      data: [{
        gender: 'Male', genderId: 'male'
      }, {
        gender: 'Female', genderId: 'female'
      },]
    }
  }
   this.viewData=
        [
          {
            "title":"view 1",
            "img":"assets/images/carousel/set1/1.jpg",
            "desc":"The vision must be followed by the venture. It is not enough to stare up the steps - we must step up the stairs.",
            "active" : true
          },
          {
            "title":"view 2",
            "img":"assets/images/carousel/set1/2.jpg",
            "desc":"If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee."
          },
          {
            "title":"view 3",
            "img":"assets/images/carousel/set1/3.jpg",
            "desc":"Either you run the day or the day runs you."
          },
          {
            "title":"view 5",
            "img":"assets/images/carousel/set1/5.jpg",
            "desc":"If I had asked people what they wanted, they would have said faster horses."

          },
          {
            "title":"view 6",
            "img":"assets/images/carousel/set1/6.jpg",
            "desc":"Coffee is a beverage that puts one to sleep when not drank."
          },
          {
            "title":"view 7",
            "img":"assets/images/carousel/set1/7.jpg",
            "desc":"Together we can face any challenges as deep as the ocean and as high as the sky."
          },
          {
            "title":"view 8",
            "img":"assets/images/carousel/set1/8.jpg",
            "desc":"Momma said life is like a box of chocolates, you never know what you're gonna get."
          },
          {
            "title":"view 9",
            "img":"assets/images/carousel/set1/9.jpg",
            "desc":"Alcohol may be man's worst enemy, but the bible says love your enemy."
          },
          {
            "title":"view 10",
            "img":"assets/images/carousel/set1/10.jpg",
            "desc":"You only need one a day, but i will have 4 :)"
          },
          {
            "title":"view 11",
            "img":"assets/images/carousel/set1/11.jpg",
            "desc":"Dogs don’t rationalize. They don’t hold anything against a person. They don’t see the outside of a human but the inside of a human"
          }
        ];

    this.bindData ={
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Ketan Gote",
            "name_official": "Ketan Gote",
            "profile": "ketan.jpg"
          },
          {
            "name": "vrushabh kokil",
            "name_official": "vrushabh kokil",
            "profile": "vrushabh.jpg"
          },
          {
            "name": "Dattaram Gawas",
            "name_official": "Dattaram Gawas",
            "profile": "dats.jpg"
          },
          {
            "name": "Sagar Jadhav",
            "name_official": "Sagar Jadhav",
            "profile": "sagar.jpg"
          },
          {
            "name": "sandip mohite",
            "name_official": "sandip mohite",
            "profile": "sandip.jpg"
          },
          {
            "name": "vrushabh Jadhav",
            "name_official": "vrushabh Jadhav",
            "profile": "ahutosh.jpg"
          }
        ]
      }
    };
    this.isVisible=false;
  }

  tabcount :number = 4;
  addtab(tab:any){
    this.tabcount++;
    let title = 'Tab '+this.tabcount;
    let cmp = tab.addDynamicTab(title,"red",true,DyanmicTabComponent);
    cmp.content = "Content of "+title;
  }

  toggleBasicWindow(){
   this.showBasicWindow = true;
  }

  toggleAlertWindow(){
    this.showAlertWindow = true;
  }

  toggleClosable(){
    this.showClosable = true;
  }

  toggleDialog(){
    this.showDialog = true;
  }

  onRowSelect(event:any){
    if(event.length>0){
      this.isVisible=true;
    }else{
      this.isVisible=false;
    }

  }
  onRowClick(event:any){

  }

  toggle(){
    this.flag = !this.flag;
  }
  ngOnInit() {

      this.data=[
        {
          "text": "Inbox",
          "expanded":false,
          "checked": false,
          "selected":true,
          "icon": "fa fa-inbox"
        },{
          "text": "Sent",
          "expanded": false,
          "checked": false,
          "icon": "fa fa-envelope-o"
        },{
          "text": "Trash",
          "expanded": false,
          "checked": false,
          "icon": "fa fa-trash-o"
        },
        {
          "text": "Labels",
          "expanded": false,
          "checked": false,
          "icon": "fa fa-tag",
          "children": [
            {
              "text": "High",
              "expanded": false,
              "checked": false,
              "icon": "fa fa-tag fa-lg"
            },{
              "text": "Medium",
              "expanded": false,
              "checked": false,
              "icon": "fa fa-tag fa-md"
            },{
              "text": "Low",
              "expanded": false,
              "checked": false,
              "icon": "fa fa-tag "
            }
          ]
        }
      ]

   }

   stepBlockClick(event:any){
     debugger;
     if(event.label=="User"){
       this.updateFlag(true,false,false,false);
       this.showMsg("Step 1 User");
     }else if(event.label=="Shop"){
       this.updateFlag(false,true,false,false);
       this.showMsg("Step 2 Shop");
     }else if(event.label=="Payment"){
       this.showMsg("Step 3 Payment");
       this.updateFlag(false,false,true,false);
     }else if(event.label=="Confirmation"){
       this.updateFlag(false,false,false,true);
       this.showMsg("Step 4 Confirmation");
     }
   }

   updateFlag(user:boolean,shop:boolean,payment:boolean,confirmation:boolean){
     this.user=user;
     this.shop=shop;
     this.payment=payment;
     this.confirmation=confirmation;
   }
   showMsg(msg){
     if(this.clickMsgArray.length>=1){
       this.clickMsgArray=[];
       this.clickMsgArray.push(msg);
     }else{
       this.clickMsgArray.push(msg);
     }
   }


}
