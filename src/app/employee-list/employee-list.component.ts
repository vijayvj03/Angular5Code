import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { Router } from '@angular/router';
import { AnimateTimings } from '@angular/core/src/animation/dsl';
import { ToastrService } from 'ngx-toastr'
import  swal from 'sweetalert2';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers :[CommonService]
})
export class EmployeeListComponent implements OnInit {
  employeeList:any;
  constructor(
    private Common: CommonService,
    private _router:Router,
    private toastr:ToastrService
  ) { }
  ngOnInit() {
    this.employeeList=[];
    this.getAllEmployee();

  }
  getAllEmployee()
  {
     this.Common.getEmployeeList().subscribe((result: any) => {
      this.employeeList=result;
    });
  }
  callEdit(id)
  {
    this._router.navigate(['/edit/'+id])
  }
  delete(id)
  {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.Common.deleteEmployee(id).subscribe((result: any) => {
          this.toastr.error("Employee Deleted Successfully","Notification")
          this.employeeList=result;
        });
      }
    })    
  }
}
