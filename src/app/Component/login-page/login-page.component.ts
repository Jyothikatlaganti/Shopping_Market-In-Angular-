import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginform!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email&&a.password === this.loginform.value.password
      });
      if(user){
        this.loginform.reset();
        this.router.navigate(['products'])
      }
      else{
        alert("User not found")
      }
    },err=>{
      alert("something went wrong");
    })
  }
}
