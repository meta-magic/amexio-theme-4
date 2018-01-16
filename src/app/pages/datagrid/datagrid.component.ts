/**
 * Created by dattaram on 13/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'data-grid',
  templateUrl: 'datagrid.component.html'
})

export class DataGridComponent implements OnInit {

  columnData: any[] = [];
  localData: any[] = [];
  treeLocalData: any;
  constructor() {
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

    this.columnData.push(
      {
        'dataIndex':'status',
        'dataType':'string',
        'hidden':false,
        'text':'Name'
      },
      {
        'dataIndex':'issue',
        'dataType':'string',
        'hidden':false,
        'text':'Code1'
      },
      {
        'dataIndex':'severity',
        'dataType':'string',
        'hidden':false,
        'text':'severity'
      },
      {
        'dataIndex':'date',
        'dataType':'string',
        'hidden':false,
        'text':'date'
      }
    );

    this.treeLocalData = {
      "data": [{
        "text": "Web App",
        "expand": true,
        "children": [
          {
            "text": "app",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "Application.js"
              }
            ]
          },
          {
            "text": "button",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "Button.js"
              },
              {
                "leaf": true,
                "text": "Cycle.js"
              },
              {
                "leaf": true,
                "text": "Split.js"
              }
            ]
          },
          {
            "text": "container",
            "expand": true,
            "children": [
              {
                "leaf": true,
                "text": "ButtonGroup.js"
              },
              {
                "leaf": true,
                "text": "Container.js"
              },
              {
                "leaf": true,
                "text": "Viewport.js",
                "expand" : true,
                "children":[],
                "lazy":{
                  "httpUrl":"data/treeview.json",
                  "httpMethod": "get"
                }
              }
            ]
          },
          {
            "text": "core",
            "expand": true,
            "children": [
              {
                "text": "dom",
                "expand": true,
                "children": [
                  {
                    "leaf": true,
                    "text": "Element.form.js"
                  },
                  {
                    "leaf": true,
                    "text": "Element.static-more.js"
                  }

                ]
              }
            ]
          }
        ]
      }]
    };
  }

  ngOnInit() {
  }
}
