import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphqlService } from '../../GRAPHQL/graphql.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: any;

  constructor(
    private graphqlService: GraphqlService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.graphqlService.getEmployeeById(id).subscribe(
        (data) => {
          this.employee = data.getEmployeeById;
        },
        (error) => {
          console.error('Error fetching employee:', error);
        }
      );
    }
  }
}
