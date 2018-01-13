/**
 * Created by pratik on 13/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

@Component({
  selector: 'action-component',
  template : `
  <h1>Action Components</h1>
  `
})

export class ActionComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

const routes: Routes = [
  {path: '', component: ActionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations : [ActionComponent]
})
export class ActionRoutingModule {
}

export const routedComponents = [ActionComponent];
