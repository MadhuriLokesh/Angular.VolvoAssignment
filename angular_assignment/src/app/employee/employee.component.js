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
var employees_service_1 = require("./employees.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(empService, router) {
        var _this = this;
        this.empService = empService;
        this.router = router;
        this.employees = null;
        this.empService.getEmployees().subscribe(function (empData) { return _this.employees = empData; });
    }
    EmployeeComponent.prototype.cleartext = function () {
        this.searchText = "";
    };
    EmployeeComponent.prototype.editEmployee = function (employee) {
        this.router.navigate(['/edit', employee.id]);
    };
    EmployeeComponent.prototype.deleteEmployee = function (employee) {
        var tempEmp = [];
        var emp = this.employees["names"];
        emp.forEach(function (value) {
            if (value.id != employee.id) {
                tempEmp.push(value);
            }
        });
        this.employees["names"] = tempEmp;
        alert("Delete respective row by id from DB");
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employees',
        templateUrl: './employee.component.html',
        providers: [employees_service_1.EmployeesService]
    }),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService, router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map