import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { UsersVerificationComponent } from './pages/users-verification/users-verification.component';

const routes: Routes = [
  {
    path: "user-details:id",
    loadComponent:()=>UsersDetailsComponent
  },
  {
    path: "user-verification:id",
    loadComponent:()=>UsersVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
