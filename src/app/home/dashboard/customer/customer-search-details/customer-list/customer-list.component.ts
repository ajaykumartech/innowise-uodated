import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerListComponent {
  
  routerId: any;
  istab = false

  buttonClick(id: any) {
    this.routerId = id;
    this.istab = !this.istab
  }

}
