import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  items = [
    {
      title: 'Create Album',
      icon: 'folder'
    },
    {
       title: 'Upload Photos',
      icon: 'image'
    }
  ];
  someFunction(item) {
    if(item.title === 'Upload Photos'){
        this.navCtrl.navigateRoot('upload-photos');
    }
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoMenu() {
    this.navCtrl.navigateRoot('menu');
  }
}
