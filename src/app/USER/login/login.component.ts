import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { GraphqlService } from '../../GRAPHQL/graphql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  user: User = {
    email: '',
    password: '',
    username: '',
  };
  showPassword: any;
  constructor(private graphqlservice: GraphqlService, private router: Router) {}

  onLogin(): void {
    this.graphqlservice['loginUser'](
      this.user.email,
      this.user.password,
      this.user.username
    ).subscribe({
      next: (result: any) => {
        console.log('succesfully login', result);
        this.router.navigate(['/employee_list']);
      },
      error: (error: any) => {
        console.log('error login', error);
      },
    });
  }
}
