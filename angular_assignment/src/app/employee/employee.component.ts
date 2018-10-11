import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'employees',
  templateUrl: './employee.component.html',
  providers: [EmployeesService]
})
export class EmployeeComponent implements OnInit { 
	employees: IEmployee[] = null;
    searchText: string;
	constructor(private empService: EmployeesService){
		
	}
	ngOnInit(){
		this.empService.getEmployees().subscribe((empData)=>this.employees=empData);
	}
    
    cleartext(){
        this.searchText = "";
    }
}
