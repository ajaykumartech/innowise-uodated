import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashComponent {
  dashboardData: any;

  constructor(private service: UserenvironmentsService, private route: Router) { }

  ngOnInit() {
    var token = localStorage.getItem('Token')
    this.service.getDashboardData(token).subscribe(response => {
      this.dashboardData = response
    })
  }

  searchValue(val: any) {
    // console.log('ddddd',val)
  }

}