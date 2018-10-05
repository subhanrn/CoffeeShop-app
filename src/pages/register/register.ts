import { LoginPage } from './../login/login';
import { UserApi } from './../../shared/sdk/services/custom/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public registerCredentials = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userApi: UserApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    console.log(this.registerCredentials)
    this.userApi.create(this.registerCredentials).subscribe(
      success => {
        this.navCtrl.push(LoginPage)
      },
      err => {
        console.log(err)
      }
    )
  }
}
