import { gql } from 'apollo-angular';

// login-route

export const USER_login = gql`
  query loginUser($input: UserInput) {
    loginUser(input: $input) {
      username
      email
      password
    }
  }
`;

export const USER_signup = gql`
  mutation signupUser($input: UserInput!) {
    signupUser(input: $input) {
      id
      username
      email
    }
  }
`;

export const USER_logout = gql`
  mutation logoutUser($input: UserInput!) {
    logoutUser(input: $input) {
      id
      username
      email
    }
  }
`;

export const FETCH_users = gql`
  query getUsers {
    getUsers {
      id
      username
      email
    }
  }
`;

export const CREATE_employee = gql`
  mutation createEmployee($input: EmployeeInput!) {
    createEmployee(input: $input) {
      id
      first_name
      last_name
      email
      gender
      salary
    }
  }
`;

export const FETCH_employees = gql`
  query getEmployees {
    getEmployees {
      id
      first_name
      last_name
      email
      gender
      salary
    }
  }
`;

export const GET_employee = gql`
  query getEmployeeById($id: ID!) {
    getEmployeeById(id: $id) {
      id
      first_name
      last_name
      email
      gender
      salary
    }
  }
`;

export const UPDATE_employee = gql`
  mutation updateEmployee($id: ID!, $input: EmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      id
      first_name
      last_name
      email
      gender
      salary
    }
  }
`;

export const DELETE_employee = gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;
