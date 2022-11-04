import { FirebaseAuthService } from './../services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginRoutingModule } from './login-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
    constructor(public firebaseAuthService: FirebaseAuthService){
    }
    ngOnInit(){}
}
