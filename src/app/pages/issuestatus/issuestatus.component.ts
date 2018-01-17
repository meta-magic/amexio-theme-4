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
    this.feedbackData=
        [
          {
            "content":"You researched three vendors when making a proposal of who we should choose to manage our payroll operations. Great job!- Kelvin peter"
          },
          {
            "content":"I know that whatever I give you to do will get done the first time I ask and will be accurate. I don’t have to ask again or check your work. You check your work for typos and mistakes before submitting it.- Sagar Jadhav"
          },
          {
            "content":"Last week you noticed an invoice that didn’t seem accurate. You researched the invoice and got the mistake corrected before I even knew there was a problem. You make my job easy.- Dattaram Gawas"
          }
        ];

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
