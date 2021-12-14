import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./forget/change-password/change-password.component";

import { ForgetComponent } from "./forget/forget.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./login/signup/signup.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { AuthGurad } from "./service/auth.guard";

const routes: Routes=[
    {path:'', component: LoginComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'forget', component: ForgetComponent},
    {path: 'change', component: ChangePasswordComponent},
    {path: 'mainpage', component: MainPageComponent, canActivate:[AuthGurad]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
// links = [{
//     name: 'Sign Up',
//     linkUrl: 'https://fb.com/signup'
// }]
}