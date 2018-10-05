import { InputReviewPage } from './../input-review/input-review';
import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {

  public listcofee: any;
  public items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coffeeShopApi: CoffeeShopApi
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddReviewPage');

    this.coffeeShopApi.find().subscribe(
      listcofee => {

        this.listcofee = listcofee
        // console.log(this.listcofee)
        // this.items = listcofee
        // let arr = []
        // for (let i in this.listcofee) {
        //   // console.log(this.listcofee[i].name)
        //   arr.push(this.listcofee[i].name)
        // }
        // this.items = arr
        // console.log(this.items)
      },
      err => {
        console.log(err)
      }
    )




  }



  filterItems(ev: any) {

    this.coffeeShopApi.find().subscribe(
      newcs => {
        // console.log(listcofee)
        this.listcofee = newcs
        let val = ev.target.value;

        if (val && val.trim() !== '') {
          this.listcofee = this.listcofee.filter(function (item) {
            return item.name.toLowerCase().includes(val.toLowerCase());
          });
        }
      },
      err => {
        console.log(err)
      }
    )



  }

  toReview(id) {
    id = id || '';
    // console.log(id)
    this.navCtrl.push(InputReviewPage, {
      id: id
    })
    // this.coffeeShopApi.updateAll({ "where": { "id": id } }, this.input).subscribe(
    //   status => {
    //     console.log(status)
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
  }

}
