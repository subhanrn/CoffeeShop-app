import {UserApi} from '../../shared/sdk/services/custom';
import {Component} from '@angular/core';
import {IonicPage, NavController, MenuController, LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public registerCredentials = {};

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public userApi: UserApi,
    public storage: Storage,
    public loadingCtrl: LoadingController,
  ) {
    this.menu.swipeEnable(false);
  }

  login() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    this.userApi.login(this.registerCredentials, 'user').subscribe(
      datas => {
        loading.dismiss();
        this.storage.set('dataAuth', datas);
        this.navCtrl.setRoot('HomePage');
        this.navCtrl.popToRoot();
      },
      err => {
        console.log(err);
        loading.dismiss();
        this.navCtrl.push('RegisterPage')
      }
    )
  }


  createAccount() {
    this.navCtrl.push('RegisterPage')
  }

}
