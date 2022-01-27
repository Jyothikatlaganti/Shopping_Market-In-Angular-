import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService }  from '../../shared/api.service';
import { EmployeeModel } from './employee-das-board.model';
@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css'] 
})
export class EmployeeDashBoardComponent implements OnInit {
  formValue!:FormGroup;
  employeeModelobj: EmployeeModel=new EmployeeModel();
  employeeData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formBuilder: FormBuilder,
    private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      mobile:[''],
      salary:['']

    });
    this.getAllEmployee();
  }
  clickaddemployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postEmployeeDetails(){
    this.employeeModelobj.firstname=this.formValue.value.firstname;
    this.employeeModelobj.lastname=this.formValue.value.lastname;
    this.employeeModelobj.email=this.formValue.value.email;
    this.employeeModelobj.mobile=this.formValue.value.mobile;
    this.employeeModelobj.salary=this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert('Something went Wrong');
    })
    }
    getAllEmployee(){
      this.api.getEmploye()
      .subscribe(res=>{
        this.employeeData = res;
      })
    }
    deleteEmployee(row:any){
      this.api.deleteEmploye(row.id)
      .subscribe(res=>{
        alert("Employee deleted Successsfully");
        this.getAllEmployee();
      })
    }
    onEdit(row:any){
      this.showAdd=false;
    this.showUpdate=true;
      this.employeeModelobj.id=row.id;
      this.formValue.controls['firstname'].setValue(row.firstname);
      this.formValue.controls['lastname'].setValue(row.lastname);
      this.formValue.controls['email'].setValue(row.email);
      this.formValue.controls['mobile'].setValue(row.mobile);
      this.formValue.controls['salary'].setValue(row.salary);
    }
    updateEmployeeDetails(){
      this.employeeModelobj.firstname=this.formValue.value.firstname;
    this.employeeModelobj.lastname=this.formValue.value.lastname;
    this.employeeModelobj.email=this.formValue.value.email;
    this.employeeModelobj.mobile=this.formValue.value.mobile;
    this.employeeModelobj.salary=this.formValue.value.salary;
    this.api.updateEmploye(this.employeeModelobj,this.employeeModelobj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
    }
}
