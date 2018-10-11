import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import { AppComponent }  from './app.component';
import {EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent } from './addEmployee/add.employee.component';
import { EmployeeSearchPipe } from './employee/employeeSearch.pipe';
import { FormsModule } from '@angular/forms';
import { appRouterModule } from './app.route';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, appRouterModule ],
  declarations: [ AppComponent, EmployeeComponent, AddEmployeeComponent, EmployeeSearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
