import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/app';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService{

  constructor(private angularFireAuth: AngularFireAuth, public router: Router) {}

  firebaseSocialLogin(provider) {
      this.angularFireAuth.signInWithPopup(provider).then((res: any) => {
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['']);
      });
  }
  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.firebaseSocialLogin(provider);
  }
  getUser(){
      const userData = localStorage.getItem('user');
      return JSON.parse(userData);
  }
  logout() {
      this.angularFireAuth.signOut();
      localStorage.setItem('user', null);
      localStorage.removeItem('user');
      this.router.navigate(['login']);
  }
}
