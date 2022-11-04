import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.page.html',
  styleUrls: ['./upload-photos.page.scss'],
})
export class UploadPhotosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoPhotos() {
    this.navCtrl.navigateRoot('photos');
  }
  gotoUploadPhotos(){
    this.navCtrl.navigateRoot('file-upload');
  }
}
