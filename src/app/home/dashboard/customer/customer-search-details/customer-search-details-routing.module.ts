import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSearchDetailsComponent } from './customer-search-details.component';

const routes: Routes = [
  {
    path: '', component: CustomerSearchDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSearchDetailsRoutingModule { }
