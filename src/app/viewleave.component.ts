import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveManagementServiceService } from '../leave-management-service.service';
import { ViewModel} from './viewModel';
import {FilteredListModel} from '../filteredlist/filteredListModel';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {
    FilterForm : FormGroup;
    FormData : any;
    viewObject : ViewModel;
    newViewObject : ViewModel;
    filterArray : FilteredListModel[]
;
  constructor(private Service : LeaveManagementServiceService) {
    // this. newViewObject = null;
   }

  ngOnInit() {
    this.FilterForm = new FormGroup({
      'aceNo': new FormControl(),
      'year': new FormControl()
    });
    this.FormData = this.FilterForm.value;
  }

 onSubmit(form:FormGroup){
  this.newViewObject = form.value;
  this.Service.viewFilterData(this.newViewObject).subscribe(
    res => {
      this.filterArray = res;
      console.log(this.filterArray);
      console.log("success");
    },
    err => {
      console.log(err.message);
    }
  );
  console.log(this.newViewObject);
 }
}
