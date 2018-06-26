/**
 * Created by ketangote on 1/10/18.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sampleform',
  templateUrl: 'sampleformex.component.html'
})


export class SampleFormComponent implements OnInit {


  currentDate : Date = new Date();

  country: string;

  checkboxGroupdata : any;

  radioGroupData:any;

  bindData : any;

  printvalue : any;

  chk : boolean  = false;

  localData: any;

  rate :number = 5;

  constructor() {
    this.country = "Hello";

    this.checkboxGroupdata = {
      response:{
        data:[{
          language:'Learning',
          checked: false
        },{
          language:'Shopping',
          checked: false
        },{
          language:'Fishing',
          checked: false
        }
        ]}};

    this.radioGroupData={
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female'
        },
        ]}};


    this.bindData ={
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Buck Kulkarni",
            "name_official": "Buck Kulkarni",
            "profile": "buck.jpg",
            "email" : "buck.kulkarni@metamagic.in"
          },
          {
            "name": "Araf Karsh Hamid",
            "name_official": "Araf Karsh Hamid",
            "profile": "karsh.jpg",
            "email" : "araf.karsh@metamagic.in"
          },
          {
            "name": "ketan Gote",
            "name_official": "Ketan Gote",
            "profile": "ketan.jpg",
            "email" : "ketan.gote@metamagic.in"
          },
          {
            "name": "vrushabh kokil",
            "name_official": "vrushabh kokil",
            "profile": "vrushabh.jpg",
            "email" : "vrushabh.kokil@metamagic.in"
          },
          {
            "name": "Dattaram Gawas",
            "name_official": "Dattaram Gawas",
            "profile": "dats.jpg",
            "email" : "dattaram.gawas@metamagic.in"
          },
          {
            "name": "Sagar Jadhav",
            "name_official": "Sagar Jadhav",
            "profile": "sagar.jpg",
            "email" : "sagar.jadhav@metamagic.in"
          },
          {
            "name": "sandip mohite",
            "name_official": "sandip mohite",
            "profile": "sandip.jpg",
            "email" : "sandip.mohite@metamagic.in"
          },
          {
            "name": "vrushabh Jadhav",
            "name_official": "vrushabh Jadhav",
            "profile": "ahutosh.jpg",
            "email" : "vrushabh.jadhav@metamagic.in"
          },
          {
            "name": "payal Kulkarni",
            "name_official": "payal Kulkarni",
            "profile": "payal.jpg",
            "email" : "payal.kulkarni@metamagic.in"
          },
          {
            "name": "puja more",
            "name_official": "puja more",
            "profile": "puja.jpg",
            "email" : "puja.more@metamagic.in"
          },
          {
            "name": "Rashmi Thakkar",
            "name_official": "Rashmi Thakkar",
            "profile": "rashmi.jpg",
            "email" : "rashmi.thakkar@metamagic.in"
          },
          {
            "name": "Deepali Arvind",
            "name_official": "Deepali Arvind",
            "profile": "dipali.jpg",
            "email" : "deepali.arvind@metamagic.in"
          },
          {
            "name": "Ashwini Agre",
            "name_official": "Ashwini Agre",
            "profile": "ashwini.jpg",
            "email" : "ashwini.agre@metamagic.in"
          }
        ]
      }
    };


    this.localData = [
      {
        "status": "Open",
        "issue":"Bug with .share operator?",
        "severity":"High",
        "date":"10-06-2017"
      },{
        "status": "Close",
        "issue":"e.preventDefault broken in ie8",
        "severity":"Low",
        "date":"01-06-2017"
      },{
        "status": "Close",
        "issue":"Third groupBy argument (key serializer) ignored",
        "severity":"Medium",
        "date":"16-06-2017"
      },{
        "status": "Open",
        "issue":"Animate no longer supports objects",
        "severity":"Medium",
        "date":"16-06-2017"
      },{
        "status": "Close",
        "issue":"Automatic build-version-publish after 1.0",
        "severity":"Medium",
        "date":"15-06-2017"
      },{
        "status": "Open",
        "issue":"Uncaught TypeError: Cannot read property 'ngOriginalError' of null",
        "severity":"Medium",
        "date":"03-05-2017"
      },{
        "status": "Open",
        "issue":"Animation background color changes for state when using *",
        "severity":"Medium",
        "date":"01-05-2017"
      },{
        "status": "Close",
        "issue":"Component/declarative error handling (ala React 16's <ErrorBoundary/>)",
        "severity":"Low",
        "date":"01-05-2017"
      },{
        "status": "Open",
        "issue":"Angular Router + Browser History=> extra page view count in GA",
        "severity":"High",
        "date":"23-04-2017"
      },{
        "status": "Open",
        "issue":"[Hidden] not working in platform-server",
        "severity":"High",
        "date":"22-04-2017"
      },{
        "status": "Close",
        "issue":"Set ViewEncapsulation per module",
        "severity":"Medium",
        "date":"20-04-2017"
      },{
        "status": "Open",
        "issue":"Router upgrade does not work when initial state is Angular ",
        "severity":"Medium",
        "date":"19-04-2017"
      },{
        "status": "Open",
        "issue":"Animations: animateChild() not working correctly ",
        "severity":"Medium",
        "date":"18-04-2017"
      },{
        "status": "Close",
        "issue":"type definition of UrlMatcher should allow to return null",
        "severity":"High",
        "date":"16-04-2017"
      },{
        "status": "Open",
        "issue":"Animations - stagger not working in route outlet ",
        "severity":"High",
        "date":"15-04-2017"
      },{
        "status": "Close",
        "issue":"Angular Router cuts off URL at &",
        "severity":"High",
        "date":"15-04-2017"
      },{
        "status": "Open",
        "issue":"Add scientific number format pipe",
        "severity":"Low",
        "date":"13-04-2017"
      },
      {
        "status": "Open",
        "issue":"Route param auto change when refresh the window.",
        "severity":"Low",
        "date":"13-04-2017"
      },{
        "status": "Close",
        "issue":"Add scientific number format pipe",
        "severity":"Medium",
        "date":"12-04-2017"
      },{
        "status": "Open",
        "issue":"docs(aio): API missing constructor overloads",
        "severity":"Low",
        "date":"13-04-2017"
      },{
        "status": "Open",
        "issue":"Http request status always pending ",
        "severity":"Low",
        "date":"11-04-2017"
      }
    ];


  }

  ngOnInit() { }

  onClick(event){
    debugger;
    this.printvalue = event;
  }
}
