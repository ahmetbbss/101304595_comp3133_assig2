import { GraphqlService } from '../../GRAPHQL/graphql.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
togglePasswordVisibility() {
throw new Error('Method not implemented.');
}
  user: User= {
    email: '',
    password: '',
    username: '',
  };
showPassword: any;
  constructor(private graphqlservice:GraphqlService, private router: Router) {}

  onSignup($event: SubmitEvent):void{

    this.graphqlservice.signupUser(this.user.email,this.user.password,this.user.username).subscribe
    ({
      next:(result) => {
        console.log("succesfully signup", result);
        this.router.navigate(["/login"])
      },
      error:(error) => {
        console.log("error signup",error);
      }
    })
  }

}
