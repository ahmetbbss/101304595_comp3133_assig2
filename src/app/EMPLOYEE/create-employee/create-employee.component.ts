import { Component } from '@angular/core';
import { GraphqlService } from '../../GRAPHQL/graphql.service';
import { Employees, Gender } from '../interface/Employees'; // Import the Employees interface and Gender enum
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employeeData: Employees = {
    first_name: '',
    last_name: '',
    email: '',
    salary: '',
    gender: Gender.Male
  };

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  handleSubmit(): void {
    this.employeeData.salary = String(this.employeeData.salary);
    this.graphqlService.createEmployee(this.employeeData).subscribe(
      (data) => {
        console.log('Employee created successfully:', data);
        this.router.navigate(['/employee_list']);

      },
      (error) => {
        console.error('Error creating employee:', error);

      }
    );
  }
}
