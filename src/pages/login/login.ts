import { HomePage } from './../home/home';
import { UserApi } from './../../shared/sdk/services/custom/User';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public registerCredentials = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menu: MenuController,
    public userApi: UserApi,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.userApi.login(this.registerCredentials, 'user')
      .subscribe(
        datas => {
          this.storage.set('dataAuth', datas)
          this.navCtrl.setRoot(HomePage)
          this.navCtrl.popToRoot()
        },
        err => {
          console.log(err)
          this.navCtrl.push(RegisterPage)
        }
      )
  }

  createAccount() {
    this.navCtrl.push(RegisterPage)
  }

}
