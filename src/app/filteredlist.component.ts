import { Component, OnInit,Input } from '@angular/core';
import {FilteredListModel} from './filteredListModel';

@Component({
  selector: 'app-filteredlist',
  templateUrl: './filteredlist.component.html',
  styleUrls: ['./filteredlist.component.css']
})
export class FilteredlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  @Input() FilteredListModel: FilteredListModel[];
}
