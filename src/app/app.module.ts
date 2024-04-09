import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './USER/login/login.component';
import { SignupComponent } from './USER/signup/signup.component';

import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { GraphqlService } from './GRAPHQL/graphql.service';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './EMPLOYEE/create-employee/create-employee.component';
import { EmployeeListComponent } from './EMPLOYEE/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EMPLOYEE/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './EMPLOYEE/view-employee/view-employee.component';

const appRoutes: Routes = [
  {path:"login", component : LoginComponent},
  {path:"signup", component : SignupComponent},
  {path:"create_employee", component : CreateEmployeeComponent,},
  {path:"employee_list", component : EmployeeListComponent,},
  {path:"update_employee/:id", component : UpdateEmployeeComponent,},
  {path:"view_employee/:id", component : ViewEmployeeComponent,},
  {path:"**", redirectTo :"/login",pathMatch :"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ApolloModule,
  ],
  providers: [
    GraphqlService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({  uri: 'https://comp3133-assignment1.onrender.com/graphql' }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
