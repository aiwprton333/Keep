import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoMenu() {
    this.navCtrl.navigateRoot('menu');
  }
}
