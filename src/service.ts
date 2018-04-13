import { Injectable } from '@angular/core';
import { AddPage } from './addpage/leavedetails';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LeaveManagementServiceService {
  url: string = 'http://172.24.145.80:8080/addLeaveDetails';

  constructor(private http: HttpClient) { 
  newData(newDetailObj: AddPage) {
    console.log("inside new Data");
    return this.http
      .post<AddPage>(this.url, newDetailObj, httpOptions);
  }
  
}
