import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddpageComponent } from './addpage/addpage.component';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementServiceService } from './leave-management-service.service';
import { EmployeeleavedetailsComponent } from './employeeleavedetails/employeeleavedetails.component';
const appRoutes: Routes = [
  {
    path: ' ',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'addpage',
    component: AddpageComponent
  },
  { 
    path: 'employeeleavedetails/:aceNo',
    component: EmployeeleavedetailsComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddpageComponent,
    EmployeeleavedetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LeaveManagementServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
