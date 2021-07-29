import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule
  ]})
export class LoginModule { }
