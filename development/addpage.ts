import { Component, OnInit, Input, Output, EventEmitter,Inject } from '@angular/core';
import { LeaveManagementServiceService } from '../leave-management-service.service';
import { AddPage } from '../addpage/leavedetails';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  DetailObj: AddPage;
  AddForm: FormGroup;
  newDetailObj: AddPage;
  formdata: any;
  flag: boolean;

  // ,public dialogRef : MatDialogModule
  constructor(private Service: LeaveManagementServiceService,public dialogRef: MatDialogRef<AddpageComponent>) {
    this.DetailObj = null;
  }

  ngOnInit(): void {
    this.AddForm = new FormGroup({
      'aceNo': new FormControl(),
      'userName': new FormControl(),
      'status': new FormControl(),
      'startDate': new FormControl(),
      'endDate': new FormControl(),
    });
    this.formdata = this.AddForm.value;
  }

  onSubmit(form: FormGroup) {
    this.newDetailObj = form.value;
    this.Service.newData(this.newDetailObj).subscribe(
      res => {
        console.log("success");
      },
      err => {
        console.log(err.message);
      }
    );
    console.log(this.newDetailObj);

  }
}
