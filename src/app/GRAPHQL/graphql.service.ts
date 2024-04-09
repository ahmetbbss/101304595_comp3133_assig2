import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as QUERIES from './queries';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) { }

  private executeQuery(
    operation: any,
    variables: any = {},
    isMutation: boolean = false
  ): Observable<any> {
    if (isMutation) {
      return this.apollo
        .mutate({
          mutation: operation,
          variables: variables,
        })
        .pipe(map((result: any) => result.data));
    } else {
      return this.apollo
        .watchQuery({
          query: operation,
          variables: variables,
        })
        .valueChanges.pipe(map((result: any) => result.data));
    }
  }

  signupUser(
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.executeQuery(
      QUERIES.USER_signup,
      { input: { username, email, password } },
      true
    );
  }

  loginUser(
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.executeQuery(
      QUERIES.USER_login,
      { input: { username, email, password } },
      true
    );
  }

  logoutUser(): Observable<any> {
    // No need for username, email, and password parameters here
    return this.executeQuery(QUERIES.USER_logout, {}, true);
  }

  getAllUsers(): Observable<any> {
    return this.executeQuery(QUERIES.FETCH_users);
  }

  getAllEmployees(): Observable<any> {
    return this.executeQuery(QUERIES.FETCH_employees);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.executeQuery(QUERIES.GET_employee, { id });
  }

  createEmployee(input: any): Observable<any> {
    return this.executeQuery(QUERIES.CREATE_employee, { input }, true);
  }

  deleteEmployeeById(id: string): Observable<any> {
    return this.executeQuery(QUERIES.DELETE_employee, { id }, true);
  }

  updateEmployee(id: string, input: any): Observable<any> {
    // Implement your updateEmployee method here
    return this.executeQuery(QUERIES.UPDATE_employee, { id, input }, true);
  }
}
