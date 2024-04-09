import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphqlService } from '../../GRAPHQL/graphql.service';
import { Employees, Gender } from '../interface/Employees';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId!: string;
  employeeData: Employees = {
    first_name: '',
    last_name: '',
    email: '',
    salary: '',
    gender: Gender.Male
  };

  Gender = Gender;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private graphqlService: GraphqlService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    this.fetchEmployeeDetails();
  }

  fetchEmployeeDetails(): void {
    this.graphqlService.getEmployeeById(this.employeeId).subscribe(
      (data: any) => {

        this.employeeData = { ...data.getEmployeeById };
      },
      (error: Error) => {
        this.errorMessage = 'Error fetching employee details: ' + error.message;
      }
    );
  }

  updateEmployee(): void {
    const id = this.employeeId;
    const input = {
      first_name: this.employeeData.first_name,
      last_name: this.employeeData.last_name,
      email: this.employeeData.email,
      gender: this.employeeData.gender,
      salary: this.employeeData.salary
    };

    this.graphqlService.updateEmployee(id, input).subscribe(
      (data: any) => {
        console.log('Employee updated successfully:', data);
        this.router.navigate(['/employee_list']);
      },
      (error: Error) => {
        this.errorMessage = 'Error updating employee: ' + error.message;
      }
    );
  }

}
