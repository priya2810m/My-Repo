import { Component, OnInit } from '@angular/core';
import { LeaveManagementServiceService } from '../leave-management-service.service';
import { EmployeeModel} from './employee';
import { ActivatedRoute,Params,RouterModule, Routes, Route } from '@angular/router';


@Component({
  selector: 'app-employeeleavedetails',
  templateUrl: './employeeleavedetails.component.html',
  styleUrls: ['./employeeleavedetails.component.css']
})

export class EmployeeleavedetailsComponent implements OnInit {
  data : EmployeeModel[];
  aceNo : string;
 
 
  constructor(private Service :LeaveManagementServiceService,private route :ActivatedRoute) {

  }

  ngOnInit() {
    this.aceNo = this.route.snapshot.paramMap.get('aceNo');
    console.log(this.aceNo);
    this.getByAceNo(this.aceNo);
  }

 getemployeeLeaveDetails(){
  this.Service.getEmployeeLeaveDetails().subscribe(
    employee => this.data = employee
  );
 }

 getByAceNo(aceNo){
  // this.newDetailObj = form.value;
  this.Service.getByAceNo(aceNo).subscribe(
    res => {
      this.data=res;
      console.log("success");
    },
    err => {
      console.log(err.message);
    }
  );
  console.log(aceNo);
}
}
