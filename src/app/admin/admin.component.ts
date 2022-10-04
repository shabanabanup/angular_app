import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public loginForm!:FormGroup
//Authenticate user details from userapi
adminapi=environment.adminapi;

submitted=false;
  

get f() { return this.loginForm.controls; }
//constructor injection
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.ValidateAuth(false); //data parameter in your userservice
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
    this.http.get<any>(this.adminapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
      });
    //   if(user){
    //     alert("login successful!!");
    //     this.loginForm.reset();
    //     this.router.navigate([''])
    //     this.userService.validateAuth(true);
    //   }else{
    //     alert("user not found !!");       
    //     this.userService.validateAuth(false);
    //   }
    // })
  
    if(user){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'Login Successful'
      })
      this.loginForm.reset();
      this.router.navigate(['home'])
      this.adminService.ValidateAuth(true);
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'error',
        title: 'User not found'
      })       
      this.adminService.ValidateAuth(false);
    }
  })

  }

}

