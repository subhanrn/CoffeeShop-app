import {ReviewerApi} from '../../shared/sdk/services/custom';
import {Component} from '@angular/core';
import {IonicPage, NavController, MenuController, LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {LoopBackConfig} from '../../shared/sdk'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public registerCredentials: any = {};
  public serverAddress: string = '';

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public reviewerApi: ReviewerApi,
    public storage: Storage,
    public loadingCtrl: LoadingController,
  ) {
    this.menu.swipeEnable(false);
  }

  login() {
    if (this.serverAddress === '') {
      LoopBackConfig.setBaseURL(LoopBackConfig.getPath());
    } else {
      if (this.serverAddress.endsWith('/')) {
        let lengthAddress = this.serverAddress.length;
        this.serverAddress = this.serverAddress.slice(0, lengthAddress - 1)
      }
      LoopBackConfig.setBaseURL(this.serverAddress);
    }

    const loading = this.loadingCtrl.create({
      content: 'Logging in...'
    });
    loading.present();

    let isEmail: boolean = this.validateEmail(this.registerCredentials.account);
    let param: Object;
    if (isEmail) {
      param = {
        email: this.registerCredentials.account,
        password: this.registerCredentials.password,
      }
    } else {
      param = {
        username: this.registerCredentials.account,
        password: this.registerCredentials.password,
      }
    }

    this.reviewerApi.login(param, 'user').subscribe(
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

  private validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  createAccount() {
    this.navCtrl.push('RegisterPage')
  }

}
