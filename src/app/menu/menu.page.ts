import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAuthService } from './../services/firebase-auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  userProfileData: any;
  constructor(private navCtrl: NavController, private firebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
    this.userProfileData = this.firebaseAuthService.getUser();
  }

  logoutAction() {
    this.firebaseAuthService.logout();
  }
  gotoPhotosPage(){
    this.navCtrl.navigateForward('photos');
  }
  gotovideo() {
    this.navCtrl.navigateForward('video');
  }
  photoUpload(){
    this.navCtrl.navigateForward('photo-upload');
  }
  photosList(){
    this.navCtrl.navigateForward('photos-list');
  }

}
