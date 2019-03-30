import {ReviewerApi} from '../../shared/sdk/services/custom';
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public registerCredentials = {};

  constructor(
    public navCtrl: NavController,
    public reviewerApi: ReviewerApi,
  ) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    console.log(this.registerCredentials)
    this.reviewerApi.create(this.registerCredentials).subscribe(
      () => {
        this.navCtrl.push('LoginPage')
      },
      err => {
        console.log(err)
      }
    )
  }
}
