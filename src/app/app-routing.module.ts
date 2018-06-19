import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path: '',
        loadChildren: './employee-list/employee-list.module#EmployeeListModule'
    },
    {
        path: 'addEmployee',
        loadChildren: './employee/employee.module#EmployeeModule'
    },
    {
        path: 'edit/:id',
        loadChildren: './employee/employee.module#EmployeeModule'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}