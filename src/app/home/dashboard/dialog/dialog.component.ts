import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  myTasks: any
  workFlows1: any
  messages: any

  ngOnInit() {
    if (this.data.Title == 'Vendor Renewal' || this.data.Title == 'Onboarding Salsabila Hampton') {
      this.myTasks = this.data.Checklist
    }
    else if (this.data.WorkflowName == 'New Business Workflows' || this.data.WorkflowName == 'Renewal Workflows') {
      this.workFlows1 = this.data.Items
    }
    else {
      this.messages = this.data
    }
  }

}
