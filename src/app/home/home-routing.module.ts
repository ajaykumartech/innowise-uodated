import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(c => c.DashboardModule) },
      { path: 'events/:id', loadChildren: () => import('./events/events.module').then(d => d.EventsModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
