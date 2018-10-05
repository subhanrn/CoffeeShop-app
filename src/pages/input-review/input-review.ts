import { LoopBackAuth } from './../../shared/sdk/services/core/auth.service';
import { ReviewApi } from './../../shared/sdk/services/custom/Review';
import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InputReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-review',
  templateUrl: 'input-review.html',
})
export class InputReviewPage {

  public input = {};
  public id: number;
  // public rating: number;
  // public description: any;
  public title = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coffeeShopApi: CoffeeShopApi,
    public reviewApi: ReviewApi,
    public auth: LoopBackAuth
  ) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InputReviewPage');
    // this.title = 'Input CoffeeShop'
    if (this.id) {
      this.coffeeShopApi.find({ "where": { "id": this.id } }).subscribe(
        selectedcoffee => {
          this.input = selectedcoffee[0];
          this.title = 'Add Review ' + this.input['name']
          // console.log(this.input)

        },
        err => {
          console.log(err)
        }
      )

      // console.log('ada id')
    }
  }

  addReview(rating, desc) {
    // console.log(id)
    this.reviewApi.create({
      "date": Date.now(),
      "rating": rating,
      "comments": desc,
      "coffeeShopId": this.id,
      "publisherId": this.auth.getCurrentUserId()
    }).subscribe(
      () => {
        this.navCtrl.pop()
      },
      err => {
        console.log(err)
      }
    )
  }

}
