import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Auth1Guard } from './auth1.guard';

const routes: Routes = [
   {path: '', component: LoginComponent, canActivate: [Auth1Guard]},
   {path:'home', loadChildren: () => import('./home/home.module').then(c=>c.HomeModule), canActivate: [AuthGuard]},
   { path: '**', redirectTo: '', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
