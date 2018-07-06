/**
 * Created by sagar on 3/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})

export class ProfileComponent implements OnInit {
  public max:number = 10;
  themeName:string;
  bindData : any;
  iconArray:any[]=[];
  constructor() {
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
            "name": "Ketan Gote",
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
  ngOnInit() {
  }
}
