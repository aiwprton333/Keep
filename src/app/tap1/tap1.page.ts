import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../services/firebase-auth.service';
@Component({
  selector: 'app-tap1',
  templateUrl: './tap1.page.html',
  styleUrls: ['./tap1.page.scss'],
})
export class Tap1Page implements OnInit {
  userProfileData: any;
  constructor(private firebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
  }

}
