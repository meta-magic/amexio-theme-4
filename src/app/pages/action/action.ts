/**
 * Created by pratik on 13/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AmexioDataModule, AmexioFormsModule, AmexioLayoutModule, AmexioWidgetModule} from "amexio-ng-extensions";

@Component({
  selector: 'action-component',
  template : `

    <amexio-card [enableHeader]="true">

      <amexio-header>
        Amexio Button Variation.
      </amexio-header>
      <amexio-body>

        <amexio-row>
          <amexio-column [size]="12">
            <h2>Button - Small / Default / Large</h2>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="3">
            <amexio-button [size]="'small'" [label]="'Secondary'" [type]="'secondary'" [tooltipMessage]="'Secondary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'small'" [label]="'Primary'" [type]="'primary'" [tooltipMessage]="'Primary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'small'" [label]="'Success'" [type]="'success'" [tooltipMessage]="'Success Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'small'" [label]="'Danger'" [type]="'danger'" [tooltipMessage]="'Danger Button'"></amexio-button>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="3">
            <amexio-button [label]="'Secondary'" [type]="'secondary'" [tooltipMessage]="'Secondary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [label]="'Primary'" [type]="'primary'" [tooltipMessage]="'Primary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button   [label]="'Success'" [type]="'success'" [tooltipMessage]="'Success Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [label]="'Danger'" [type]="'danger'" [tooltipMessage]="'Danger Button'"></amexio-button>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="3">
            <amexio-button [size]="'large'" [label]="'Secondary'" [type]="'secondary'" [tooltipMessage]="'Secondary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'large'" [label]="'Primary'" [type]="'primary'" [tooltipMessage]="'Primary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button   [size]="'large'" [label]="'Success'" [type]="'success'" [tooltipMessage]="'Success Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'large'" [label]="'Danger'" [type]="'danger'" [tooltipMessage]="'Danger Button'"></amexio-button>
          </amexio-column>
        </amexio-row>



        <amexio-row>
          <amexio-column [size]="12">
            <h2>Button Group</h2>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'small'">
              <amexio-button [label]="'Save'" [type]="'secondary'" [tooltipMessage]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [type]="'secondary'" [tooltipMessage]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'default'">
              <amexio-button [label]="'Save'" [type]="'success'" [tooltipMessage]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [type]="'success'" [tooltipMessage]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'large'">
              <amexio-button [label]="'Secondary'" [type]="'danger'" [tooltipMessage]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [type]="'danger'" [tooltipMessage]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="6">
            <h2>Button Drop Down</h2>
          </amexio-column>
        </amexio-row>
        <amexio-row>
          <amexio-column [size]="4">
            <amexio-btn-dropdown [label]="'Button'" [type]="'primary'" [size]="'default'">
              <amexio-btn-dropdown-item [label]="'Expand'" [icon]="'fa fa-arrows-alt'" (onItemClick)="onItemClick($event)"></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'"  [icon]="'fa fa-trash'" (onItemClick)="onItemClick($event)"></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-dropdown [label]="'Button'" [type]="'success'" [size]="'default'">
              <amexio-btn-dropdown-item [label]="'Expand'" [icon]="'fa fa-arrows-alt'" (onItemClick)="onItemClick($event)"></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'"  [icon]="'fa fa-trash'" (onItemClick)="onItemClick($event)"></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-dropdown [label]="'Button'" [type]="'danger'" [size]="'default'">
              <amexio-btn-dropdown-item [label]="'Expand'" [icon]="'fa fa-arrows-alt'" (onItemClick)="onItemClick($event)"></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'"  [icon]="'fa fa-trash'" (onItemClick)="onItemClick($event)"></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
          </amexio-column>
        </amexio-row>

      </amexio-body>
    </amexio-card>

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
  imports: [RouterModule.forChild(routes),AmexioWidgetModule,
  AmexioLayoutModule,AmexioFormsModule,AmexioDataModule],
  exports: [RouterModule],
  declarations : [ActionComponent]
})
export class ActionRoutingModule {
}

export const routedComponents = [ActionComponent];