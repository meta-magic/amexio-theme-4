/**
 * Created by dattaram on 13/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  moduleId: module.id,
  selector: 'templates',
  templateUrl: 'templates.component.html',
   styles:[`
    .listbox-StatusYellow {
      background-color: yellow;
    }
    .listbox-StatusGreen  {
      background-color: green;
     }
    .listbox-StatusRed {
      background-color: red;
  }
  
.red {
    color: red!important;
   
}
.green {
    color: green!important;
   
}
.yellow {
    color: yellow!important;
    
}
.progressBar .progress{
  height:5px !important;
}  
`]
})

export class TemplatesGridComponent implements OnInit {
  progressType:string;
  actionWindowFlag:boolean;
    projectData:any;
  browserData:any;
  constructor() {
 this.projectData={
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Admin Template	",
            "status": " 65%"
          },
          { "name": "Landing Page",
            "status": "Finished"
          },
          {
             "name": "Backend UI	",
            "status": "Rejected"
          },
          {
            "name": "Personal Blog",
            "status": "40%"
          },
          {
           "name": "E-mail Templates	",
            "status": "13%"
          },
          {
          "name": "Corporate Website",
            "status": "Pending"
          }
        ]
      }
    } 
    this.browserData={
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Google Chrome",
            "usage":"23%",
            "icon": "Google Chrome.jpg "
          },
          { "name": "Mozila Firefox",
            "usage":"15%",
            "icon": "Mozila Firefox.png "
          },
          {
             "name": "Apple Safari",
             "usage":"7%",
            "icon": "Apple Safari.png "
          },
          {
            "name": "Internet Explorer",
            "usage":"9%",
            "icon": "Internet Explorer.jpeg"
          },
          {
           "name": "Opera mini",
           "usage":"20%",
            "icon": "Opera mini.jpg"
          },
          {
          "name": "Microsoft edge",
          "usage":"9%",
            "icon": "Microsoft edge.jpg"
          }
        ]
      }
    } 


  }

  ngOnInit() {
  }
  getGridTemplateData(row:any): string{
    if(row.Usage>=50){
      return "success";
    }
    if(row.Usage<50 && row.Usage>=30){
      return "warning";
    }
       if(row.Usage<30){
       return "danger";
    }
  }
  
}
