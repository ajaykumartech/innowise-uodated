import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-customer-personal-details',
  templateUrl: './customer-personal-details.component.html',
  styleUrls: ['./customer-personal-details.component.css']
})
export class CustomerPersonalDetailsComponent {
  customerId: any
  personalData: any;


  constructor(private service: UserenvironmentsService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id');
    var token = localStorage.getItem('Token')
    this.service.getcustomerDetails(this.customerId, token).subscribe(response => {
      this.personalData = response;
    })
  }
}

