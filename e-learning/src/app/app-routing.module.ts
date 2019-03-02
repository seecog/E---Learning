import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

const routes: Routes = [
  {path : '',component : DashboardComponent},
  {path : "register",component : RegistrationComponent},
  {path : 'register-success',component : RegisterSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
