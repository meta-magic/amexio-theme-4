/**
 * Created by ketangote on 8/17/17.
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample',
  templateUrl: 'sample.html'
})

export class SampleComponent implements OnInit {

  currentDate : Date = new Date();

  country: string;

  checkboxGroupdata : any;
  disabledDate:any[];

  radioGroupData:any;
  time:any;
  name:any;
  bindData : any;
  rate : number = 5;

  constructor() {

    this.disabledDate = [
      {
        "from": "13-Mar-2018",
        "to": "15-Mar-2018"
      },
      {
        "from": "20-Aug-2018",
        "to": "25-Aug-2018"
      }
    ];

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

  }

  ngOnInit() { }
}
