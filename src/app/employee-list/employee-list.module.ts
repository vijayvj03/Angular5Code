import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListRoutingModule } from './employee-list.routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ToasterModule, ToasterService } from 'angular2-toaster';
@NgModule({
    imports: [
        CommonModule,
        EmployeeListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [EmployeeListComponent],
    providers: []
})
export class EmployeeListModule {}