import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee.routing.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ToasterModule, ToasterService } from 'angular2-toaster';
@NgModule({
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [EmployeeComponent],
    providers: []
})
export class EmployeeModule {}