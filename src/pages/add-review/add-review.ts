import { CoffeeShopApi } from '../../shared/sdk/services/custom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {

  public listcofee: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coffeeShopApi: CoffeeShopApi
  ) {
  }

  ionViewDidLoad() {
    this.coffeeShopApi.find().subscribe(
      listcofee => {
        this.listcofee = listcofee
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
    this.navCtrl.push('InputReviewPage', {
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
