import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class EmployeesService{
	constructor(private http: Http){
	}
	
	getEmployees() : Observable<any[]>{
		return this.http.get('./db.json')
		.map((resp: Response)=> resp.json());
	}
}