export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export interface Employees {
  first_name: string;
  last_name: string;
  email: string;
  salary: string;
  gender: Gender;
}
