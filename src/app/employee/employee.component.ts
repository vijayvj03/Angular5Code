import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { NgForm } from '@angular/forms'
import { Router,ActivatedRoute } from '@angular/router';
import { AnimateTimings } from '@angular/core/src/animation/dsl';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers :[CommonService]
})
export class EmployeeComponent implements OnInit {
selectedEmployee:{};
id:any=0;
  constructor(
    private Common: CommonService,
    private _router:Router,
    private _route:ActivatedRoute,
    private toastr:ToastrService
  ) {
    if(this._route.snapshot.params["id"]){
      this.id=parseInt(this._route.snapshot.params["id"])
    }
   }

  ngOnInit() {
    this.selectedEmployee={};
    if(this.id!=0){
      this.showForEdit(this.id);
    }
  }
  
  onSubmit(form: NgForm) {
    debugger
    //if (form.value.EmployeeID == null) {
      this.Common.postEmployee(form.value)
        .subscribe((result: any) => {
          //this.resetForm(form);
       // this.employeeList= this.getAllEmployee();
          this.toastr.success("Employee details saved successfully","Notification")
          this._router.navigate([''])
                })
    // }
    // else {
    //   this.employeeService.putEmployee(form.value.EmployeeID, form.value)
    //   .subscribe(data => {
    //     this.resetForm(form);
    //     this.employeeService.getEmployeeList();
    //     this.toastr.info('Record Updated Successfully!', 'Employee Register');
    //   });
    // }
  }
  showForEdit(employeeID)
  {
    this.Common.getEmployeeById(employeeID)
    .subscribe((result: any) => {
      //this.resetForm(form);
      this.selectedEmployee=result;
   // this.employeeList= this.getAllEmployee();
    })
  }

}
