import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HomeModal } from './homemodal';
import { LeaveManagementServiceService } from '../leave-management-service.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { TableExport } from 'tableexport';
import { MatDialog } from '@angular/material';
import {PopupService } from '../popupservice.service';
// import { AddpageComponent } from '../addpage/addpage.component';
//import { ActivatedRoute,Params,RouterModule, Routes, Route } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  
  values : HomeModal[];
  name : string;
  DetailObj: HomeModal;
  LeaveForm: FormGroup;
  formdata: any;
  newDetailObj: HomeModal;
  public te: TableExport;
  dialogResult : any;
  result : any;
  constructor(private Service : LeaveManagementServiceService,private popupService : PopupService) {
      
   }
  
  ngOnInit(){
    this.getData();
    // $ (function(){
    //   $('#example').DataTable( {
    //     dom: 'Bfrtip',
    //     buttons: [
    //         'copy', 'csv', 'excel', 'pdf', 'print'
    //     ]
    // } );
    // });
  // this.aceNo = this.route.snapshot.params['foo'];
  }

  // ngOnDestroy() {
  //  this.Service.aceNo = this.aceNo;
  // }
 
  public ngAfterViewChecked() {
    new TableExport(document.querySelector('#customers')).reset();
  }


  getData(){
    console.log("response");
    this.Service.getData().subscribe(
      res => {
        this.values=res;
        console.log("inside get ts");
      },
      err => {
        console.log(err.message);
      }
    );
  }

  public openDialog() {
    this.popupService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?');
  }
}

