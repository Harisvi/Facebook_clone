import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  authForm: any = {
    firstName: '',
    surname: '',
    password: '',
    dob: '',
    email: ''
  };
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

    onSignup(){
    
        this.authService.signUp(this.authForm)
        .subscribe(response=>{
          console.log(response);
        },error=>{
          console.log(error);
          
        })
     
    }
}
