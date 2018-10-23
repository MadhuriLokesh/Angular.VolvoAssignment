"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employees_service_1 = require("../employee/employees.service");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(empService) {
        this.empService = empService;
        this.employee = {};
        this.employees = null;
    }
    AddEmployeeComponent.prototype.save = function () {
        console.log(this.employee);
        alert("send the data to backend");
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'add-employees',
        templateUrl: './add.employee.component.html',
        providers: [employees_service_1.EmployeesService]
    }),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
var EditEmployeeComponent = (function () {
    function EditEmployeeComponent(route) {
        var _this = this;
        this.route = route;
        this.employee = {};
        this.route.params.subscribe(function (res) { return _this.editId = res.id; });
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
        console.log(this.editId);
        alert(this.editId + " is the id to be edited");
    };
    EditEmployeeComponent.prototype.save = function () {
        console.log(this.employee);
    };
    return EditEmployeeComponent;
}());
EditEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'edit-employees',
        templateUrl: './add.employee.component.html',
        providers: [employees_service_1.EmployeesService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], EditEmployeeComponent);
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=add.employee.component.js.map