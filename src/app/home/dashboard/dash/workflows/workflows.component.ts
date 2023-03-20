import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WorkflowsComponent {

  @Input() data: any;
  workFlowALLData: any
  workFlowCount = [0];
  RenewalCount = [0]
  filter = 'self'

  constructor(private service: UserenvironmentsService, public dialog: MatDialog) { }

  ngOnInit() {
    var token = localStorage.getItem('Token');
    this.service.getDashboardDatabyID(this.data.Id, token).subscribe(res => {
      this.workFlowALLData = res
      this.workFlowALLData = this.workFlowALLData[0];
      // if(this.filter == 'self')
      // {
      //   this.workFlowData = this.workFlowALLData[0]
      //   for(var i=0;i< this.workFlowALLData[0].Workflows[0].Items.length ;i++){
      //       this.workFlowCount[i] = parseInt(this.workFlowALLData[0].Workflows[0].Items[i].Count)
      //   }
      //   for(var i=0;i< this.workFlowALLData[0].Workflows[1].Items.length ;i++){
      //     this.RenewalCount[i] = parseInt(this.workFlowALLData[0].Workflows[1].Items[i].Count)
      //   }
      // }
      //      Team Data      
      // else{
      //   for(var i=0;i< this.workFlowALLData[0].Workflows[0].Items.length ;i++){
      //     this.workFlowCount[i]=0;
      //     for(var j=0;j<2;j++){
      //       this.workFlowCount[i] += parseInt(this.workFlowALLData[j].Workflows[0].Items[i].Count)
      //     }
      //   }

      //   for(var i=0;i< this.workFlowALLData[0].Workflows[1].Items.length ;i++){
      //     this.RenewalCount[i]=0;
      //     for(var j=0;j<2;j++){
      //       this.RenewalCount[i] += parseInt(this.workFlowALLData[j].Workflows[1].Items[i].Count)
      //     }
      //   }
      // }


    })
  }

  openDialog(dat: any) {
    const dialogRef = this.dialog.open(DialogComponent, { data: dat });
    dialogRef.afterClosed().subscribe(result => { });
  }

} 