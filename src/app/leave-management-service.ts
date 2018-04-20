import { Injectable } from '@angular/core';
import { AddPage } from './addpage/leavedetails';
import { HomeModal } from './homepage/homemodal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeleavedetailsComponent } from './employeeleavedetails/employeeleavedetails.component';
import { EmployeeModel } from './employeeleavedetails/employee';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LeaveManagementServiceService {
  aceNo : any;
  url: string = 'http://localhost:8080/addLeaveDetails';
  geturl : string = 'http://localhost:8080/getAllLeaveDetails';
  getleavedetailsurl : string = 'http://172.24.145.80:8080/';

  constructor(private http: HttpClient) { }

  newData(newDetailObj: AddPage) {
    console.log("inside new Data");
    return this.http
      .post<AddPage>(this.url, newDetailObj, httpOptions);
  }

  getData(){
    console.log("inside get service");
    return this.http
    .get<HomeModal[]>(this.geturl);
  }

  getEmployeeLeaveDetails(){
    console.log("inside get Employee Leave Details");
    return this.http.get<EmployeeModel[]>(this.getleavedetailsurl);
  }

  getByAceNo(aceNo){
    console.log("inside get by Ace No");
    return this.http.get<EmployeeModel[]>(this.getleavedetailsurl + aceNo);
  }
}
