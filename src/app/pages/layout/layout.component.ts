/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';

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
  confirmStatus:string;
  toggleConfirm:any;
  toggleAlert:any;
clickMsgArray:any=[];
  user:boolean;
  shop:boolean;
  payment:boolean;
  confirmation:boolean;

  showBasicWindow : boolean;
  showAlertWindow : boolean;
  showClosable : boolean;
  showDialog : boolean;

  constructor() {
   this.user=false;
   this.shop=true;
   this.payment=false;
   this.confirmation=false;
   this.flag=false;
   this.viewData=
        [
          {
            "title":"view 1",
            "img":"assets/images/carousel/set1/1.jpg",
            "active" : true
          },
          {
            "title":"view 2",
            "img":"assets/images/carousel/set1/2.jpg"
          },
          {
            "title":"view 3",
            "img":"assets/images/carousel/set1/3.jpg"
          },
          {
            "title":"view 4",
            "img":".assets/images/carousel/set1/4.jpg"
          },
          {
            "title":"view 5",
            "img":"assets/images/carousel/set1/5.jpg"

          },
          {
            "title":"view 6",
            "img":"assets/images/carousel/set1/6.jpg"
          },
          {
            "title":"view 7",
            "img":"assets/images/carousel/set1/7.jpg"
          },
          {
            "title":"view 8",
            "img":"assets/images/carousel/set1/8.jpg"
          },
          {
            "title":"view 9",
            "img":"assets/images/carousel/set1/9.jpg"
          },
          {
            "title":"view 10",
            "img":"assets/images/carousel/set1/10.jpg"
          },
          {
            "title":"view 11",
            "img":"assets/images/carousel/set1/11.jpg"
          },
          {
            "title":"view 12",
            "img":"assets/images/carousel/set1/12.jpg"
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
            "name": "Pratik Kelwalkar",
            "name_official": "Pratik Kelwalkar",
            "profile": "pratik.jpg"
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
            "name": "Mahesh Pardeshi",
            "name_official": "Mahesh Pardeshi",
            "profile": "mahesh.jpg"
          },
          {
            "name": "Ashutosh Jadhav",
            "name_official": "Ashutosh Jadhav",
            "profile": "ahutosh.jpg"
          }
        ]
      }
    };
    this.isVisible=false;
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
   updateFlag(user:boolean,shop:boolean,payment:boolean,confirmation:boolean){
       this.user=user;
       this.shop=shop;
       this.payment=payment;
       this.confirmation=confirmation;
     }
     showMsg(msg){
    if(this.clickMsgArray.length>=1){
      this.clickMsgArray=[];
      this.clickMsgArray.push({'msg':msg, 'type' : 'info'});
    }else{
      this.clickMsgArray.push({'msg':msg, 'type' : 'info'});
    }
  }
   // step box click event
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
}
