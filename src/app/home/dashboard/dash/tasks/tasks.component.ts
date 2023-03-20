import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() data: any;
  taskAllData: any;
  taskSelfData: any;
  values: any
  constructor(private service: UserenvironmentsService, public dialog: MatDialog) { }

  ngOnInit() {
    var token = localStorage.getItem('Token');
    this.service.getDashboardDatabyID(this.data.Id, token).subscribe(res => {
      this.taskAllData = res
      this.taskSelfData = this.taskAllData[0];
      this.values = []
      for (var i = 0; i < this.taskSelfData.taskItems.length; i++) {
        var value = "--value:"
        const val = JSON.stringify(this.taskSelfData.taskItems[i].CompletionStatus)
        const v = val.substring(0, val.length - 2)
        const va = v.substring(1, v.length)
        value = value + va
        this.values.push(value)
      }
    })
  }


  openDialog(dat: any) {
    const dialogRef = this.dialog.open(DialogComponent, { data: dat });
    dialogRef.afterClosed().subscribe(result => { });
  }
}
