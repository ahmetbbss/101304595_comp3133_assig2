import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './USER/login/login.component';
import { SignupComponent } from './USER/signup/signup.component';
import { CreateEmployeeComponent } from './EMPLOYEE/create-employee/create-employee.component';
import { EmployeeListComponent } from './EMPLOYEE/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EMPLOYEE/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './EMPLOYEE/view-employee/view-employee.component';


const routes: Routes = [
 
  {path:"login", component : LoginComponent},
  {path:"signup", component : SignupComponent},
  {path:"create_employee", component : CreateEmployeeComponent,},
  {path:"employee_list", component : EmployeeListComponent,},
  {path:"update_employee/:id", component : UpdateEmployeeComponent,},
  {path:"view_employee/:id", component : ViewEmployeeComponent,},
  {path:"**", redirectTo :"/login",pathMatch :"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
