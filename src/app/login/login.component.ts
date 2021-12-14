import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isLogin:boolean= true;

  logForm:any={
    email:'',
    password:''
  };
  // response:string= 'Login Sucess';
  msg : any;
  // isLogin: boolean= true;
  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit(): void {
    
  }
  onNewAcc(){
    this.router.navigate(['./signup']);
  }

  onSubmit(){
     this.authService.logIn(this.logForm)
     .subscribe(response=>{
       console.log(response)
       this.router.navigate(['./mainpage']);
       this.msg= 'login Sucess';
      //  this.isLogin=true;
     },error=>{
       console.log(error)
       this.msg='Login Failure';
     });
  }

}
