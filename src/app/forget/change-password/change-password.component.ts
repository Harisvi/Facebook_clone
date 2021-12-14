import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changeForm:any={
    oobCode:'',
    password:''
  }
  msg: any;
  constructor(private changeService: AuthService) { }

  ngOnInit(): void {
  }
  onChange(){
    this.changeService.changePassword(this.changeForm)
    .subscribe(response=>{
      console.log(response)
      this.msg= 'login Sucess';
    },error=>{
      console.log(error)
    });
  }

}
