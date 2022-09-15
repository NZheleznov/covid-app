import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from "@angular/material/icon";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
