import { Injectable } from '@angular/core';
import { AddPage } from './addpage/leavedetails';
import { HomeModal } from './homepage/homemodal';
import {ViewModel } from './viewleave/viewModel';
import {FilteredListModel} from './filteredlist/filteredListModel';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeleavedetailsComponent } from './employeeleavedetails/employeeleavedetails.component';
import { EmployeeModel } from './employeeleavedetails/employee';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LeaveManagementServiceService {
  year : any;
  aceNo : any;
  filtered :ViewModel[];
  url: string = 'http://localhost:8080/addLeaveDetails';
  geturl : string = 'http://localhost:8080/getAllLeaveDetails';
  getleavedetailsurl : string = 'http://localhost:8080/getLeaveDetailsByAceNo/';
  filterUrl : string = 'http://localhost:8080/filteredList';

  constructor(private http: HttpClient) { }
  newData(newDetailObj: AddPage) {
    console.log("add page service");
    return this.http
      .post<AddPage>(this.url, newDetailObj, httpOptions);
  }

  getData(){
    console.log("home page service");
    return this.http
    .get<HomeModal[]>(this.geturl);
  }

  getEmployeeLeaveDetails(){
    console.log("get Employee Leave Details");
    return this.http.get<EmployeeModel[]>(this.getleavedetailsurl);
  }

  getByAceNo(aceNo){
    console.log("get by Ace No");
    return this.http.get<EmployeeModel[]>(this.getleavedetailsurl+aceNo);
  }

  viewFilterData(newDetailObj: ViewModel){
    console.log("filter service");
     return this.http
      .post<any>(this.filterUrl,newDetailObj);
  }
}
