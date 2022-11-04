import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

//import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, IonicModule, LoginRoutingModule],
  })
  export class LoginModule {}
