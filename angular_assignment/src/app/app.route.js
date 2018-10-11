"use strict";
var router_1 = require("@angular/router");
var employee_component_1 = require("./employee/employee.component");
var add_employee_component_1 = require("./addEmployee/add.employee.component");
var routes = [
    {
        path: '',
        component: employee_component_1.EmployeeComponent
    },
    {
        path: 'users',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {
        path: 'add',
        component: add_employee_component_1.AddEmployeeComponent
    }
];
exports.appRouterModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.route.js.map