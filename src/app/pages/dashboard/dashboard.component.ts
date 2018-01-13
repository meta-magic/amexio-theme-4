/**
 * Created by ketangote on 1/10/18.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dashboard-home',
  templateUrl: 'dashboard.component.html'
})


export class DashboardComponent implements OnInit {
  gaugeData:any;
  constructor() {
    this.gaugeData=[
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68],
      ['Main Memory',88]
    ];
  }
  ngOnInit() { }
  
}
