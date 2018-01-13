/**
 * Created by sagar on 2/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'issue-status',
  templateUrl: 'issuestatus.html'
})

export class IssueStatusComponent implements OnInit {

  openIssuedata:any;
  feedbackData:any;
  constructor() {
    this.feedbackData={
      response:{
        data:[
          {
            "title":"view 1",
            "img":"./assets/images/5656.jpg",
            "content":"<div><p>You researched three vendors when making a proposal of who we should choose to manage our payroll operations. Great job!</p><div style='float: right;'>- Kelvin peter</div></div>",
            "caption":"Chicago",
            "active" : true
          },
          {
            "title":"view 2",
            "img":"./assets/images/5656.jpg",
            "content":"<div><p>I know that whatever I give you to do will get done the first time I ask and will be accurate. I don’t have to ask again or check your work. You check your work for typos and mistakes before submitting it.</p><div style='float: right;'>- Sagar Jadhav</div>",
            "caption":"Los Angeles",
            "active" : false
          },
          {
            "title":"view 3",
            "img":"./assets/images/5656.jpg",
            "content":"<p>Last week you noticed an invoice that didn’t seem accurate. You researched the invoice and got the mistake corrected before I even knew there was a problem. You make my job easy.</p></div></p><div style='float: right;'>- Dattaram Gawas</div>",
            "caption":"New York",
            "active" : false
          }
        ]
      }
    }
    this.openIssuedata={
      response:{
        data:[{
          issueId:1,
          issueName:'Bug with .share operator?',
          checked:false
        },{
          issueId:2,
          issueName:"e.preventDefault broken in ie8",
          checked:false
        },{
          issueId:1,
          issueName:'Third groupBy argument (key serializer) ignored',
          checked:false
        }
        ]}};
  }
  onRowSelect(event:any){

  }
  onRowClick(event:any){

  }
  ngOnInit() { }
}
