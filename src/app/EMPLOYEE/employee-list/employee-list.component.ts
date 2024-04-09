// employee-list.component.ts

import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../GRAPHQL/graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(
    private graphqlService: GraphqlService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.graphqlService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data.getEmployees;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  viewEmployee(id: string): void {
    this.router.navigate(['/view_employee', id]);
  }

  updateEmployee(id: string): void {
    this.router.navigate(['/update_employee', id]);
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.graphqlService.deleteEmployeeById(id).subscribe(
        () => {

          this.router.navigateByUrl('/employee_list', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/employee_list']);
          });
        },
        (error) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }

  navigateAdd() {
    this.router.navigate(['/create_employee']);
  }
}
