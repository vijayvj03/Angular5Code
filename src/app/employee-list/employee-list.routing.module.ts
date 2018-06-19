import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { CommonService } from '../core/services/common.service';


const routes: Routes = [
    { path: '', component: EmployeeListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeListRoutingModule {}