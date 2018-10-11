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
var employees_service_1 = require("./employees.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(empService) {
        this.empService = empService;
        this.employees = null;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empService.getEmployees().subscribe(function (empData) { return _this.employees = empData; });
    };
    EmployeeComponent.prototype.cleartext = function () {
        this.searchText = "";
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employees',
        templateUrl: './employee.component.html',
        providers: [employees_service_1.EmployeesService]
    }),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map