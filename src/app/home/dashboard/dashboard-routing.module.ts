import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'dash', component: DashComponent },
      { path: 'customer', loadChildren: () => import('./customer/customer.module').then(c => c.CustomerModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
