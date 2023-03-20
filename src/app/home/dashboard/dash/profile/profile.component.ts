import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  dashboardData: any;
  profile: any
  profileImage: any
  notificationCount = 0
  data: any
  notificationItems: any
  token: any


  constructor(private service: UserenvironmentsService, private route: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.token = localStorage.getItem('Token')
    this.service.getDashboardData(this.token).subscribe(response => {
      this.dashboardData = response
    })

    this.service.getProfilePic(this.token).subscribe(response => {
      this.profile = response
      this.profileImage = this.profile.ClientUser.profileIconBase64
    })

    // this.service.getNotificationCount(this.token).subscribe(response => {
    //   this.notificationCount = res      
    // })

    this.service.getNotificationCount(this.token).subscribe(response => {
      this.data = response
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].state == 0)
          this.notificationCount += 1
      }
      this.notificationItems = this.data
    })
  }

  signout() {
    localStorage.removeItem('Token')
    this.route.navigate([''])
  }

  viewdata(data: any, id: any) {
    var body = {
      "NotificationId": id,
      "State": 1
    }
    this.service.changeNotificationState(body, this.token).subscribe(res => { })
    const dialogRef = this.dialog.open(DialogComponent, { data: data.message });
    dialogRef.afterClosed().subscribe(result => {
      if (data.state == 0) {
        window.location.reload()
      }
    });
  }

}