import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm:any={
    email:''
  }
  constructor(private forgetService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onForget(){
    this.forgetService.forgetPassword(this.forgetForm)
    .subscribe(response=>{
      console.log(response)
      this.router.navigate(['change'])
    },error=>{
      console.log(error)
    });
  }

}
