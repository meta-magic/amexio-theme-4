/**
 * Created by ketangote on 12/18/17.
 */




import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'amexio-test-window',
  template: `
    <div class="modal-window">
      <div class="modal-window-content">
        <header class="modal-window-header">
          Title
        </header>
        <div class="modal-window-middle">
          Are you sure you want to delete
        </div>
        <footer class="modal-window-footer">
          BUTTON..
        </footer>
      </div>
    </div> 
    
   <!-- <div class="root-window">
      <div class="modal-window-lg">ABCD</div> 
    </div>-->
 
  `
})
export class TestAmexioWindowPaneComponent implements  OnInit{

  @Input() footeralign: string;

  @Input()  showWindow : boolean;

  isFullWindow : boolean;

  @Input() maximize: boolean;

  @Input()  closable : boolean;

  constructor(){
    this.footeralign = "right";
    this.isFullWindow = false;
    this.maximize = false;
  }


  ngOnInit(){
  }

  sizeChange(){
    this.isFullWindow = !this.isFullWindow;
  }

  onCloseClick(event : any){
    if(this.closable){
      this.showWindow = !this.showWindow;
    }
  }

}



