import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "./user.module";

interface ResDate{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    requestType:string;
}

@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http: HttpClient, private route:Router){}
    user= new Subject<User>();

    signUp(data: any){
        const signUpData = {
            name: data.firstName + ' ' + data.surname,
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }
        return this.http
        .post
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCky50I7dCtjQ0HXm_Ox-46QpAm6rkq05A'
     ,  signUpData).pipe(tap(response=>{
         this.handleAuth(data.email, data.userId, data.tokenId, data.expiresIn)
         console.log(response);
     }))
    };
    logIn(data: any){
        const logInData ={
            email:data.email,
            password:data.password,
            returnSecureToken:true,
        }
        return this.http
        .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCky50I7dCtjQ0HXm_Ox-46QpAm6rkq05A'
            , logInData ).pipe(tap(response=>{
                this.handleAuth(data.email, data.userId, data.tokenId, data.expiresIn)
            }))
    };
    forgetPassword(data:any){
        const forgetData ={
            requestType:'password_reset',
            email:data.email
        }
        return this.http
        .post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCky50I7dCtjQ0HXm_Ox-46QpAm6rkq05A'
        , forgetData)
    };
    changePassword(data:any){
        const changeData ={
            oobCode:'password_reset_code',
            newPassword:data.password
        }
        return this.http
        .post('https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyCky50I7dCtjQ0HXm_Ox-46QpAm6rkq05A'
        , changeData)
    };

    private handleAuth(email:string, userId:string, token:string, expireIn:number){
        const expirationDate= new Date(new Date().getTime() + expireIn*1000);
        const user= new User(email,userId,token,expirationDate);
        this.user.next(user)
    }
    logOut(){
        this.user.next();
        this.route.navigate(['./Login']);
    }
}