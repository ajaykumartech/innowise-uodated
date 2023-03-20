import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent,
    children: [
      { path: '', component: CustomerPageComponent },
      { path: 'customer-search-details/:id', loadChildren: () => import('./customer-search-details/customer-search-details.module').then(c => c.CustomerSearchDetailsModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
