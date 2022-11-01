import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.page.html',
  styleUrls: ['./setnewpassword.page.scss'],
})
export class SetnewpasswordPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
}
  gotologin() {
    this.navCtrl.navigateRoot('login');
  }
}
