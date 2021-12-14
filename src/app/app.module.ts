import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './login/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './forget/change-password/change-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { SlidebarLeftComponent } from './main-page/slidebar-left/slidebar-left.component';
import { SlidebarRightComponent } from './main-page/slidebar-right/slidebar-right.component';
import { CenterContentComponent } from './main-page/center-content/center-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider' ;
import { MatIconModule } from '@angular/material/icon';
// import { PostComponent } from './main-page/popup/post.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    SignupComponent,
    ChangePasswordComponent,
    MainPageComponent,
    HeaderComponent,
    SlidebarLeftComponent,
    SlidebarRightComponent,
    CenterContentComponent,
    // PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
