import { AddReviewPage } from './../add-review/add-review';
import { InputcsPage } from './../inputcs/inputcs';
import { CoffeeShopApi } from './../../shared/sdk/services/custom/CoffeeShop';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReviewApi } from '../../shared/sdk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public input = {};
  public listcofee: any;
  public listreview: any;
  public pageType = '0'
  public title = '';

  constructor(
    public navCtrl: NavController,
    public coffeeShopApi: CoffeeShopApi,
    public reviewApi: ReviewApi
  ) {

  }


  ionViewDidLoad() {
    this.coffeeShopApi.find().subscribe(
      listcofee => {
        // console.log(listcofee)
        this.listcofee = listcofee
      },
      err => {
        console.log(err)
      }
    )


    this.reviewApi.find({
      "include": ["coffeeShop", "user"]
    }).subscribe(
      listreview => {
        
        this.listreview = listreview
        console.log("listreview", listreview)
      },
      err => {
        console.log(err)
      }
    )


  }

  // ionViewDidEnter() {

  //   this.ionViewDidLoad()
  // }

  toReview() {
    this.navCtrl.push(AddReviewPage)
  }

  toInput() {
    this.navCtrl.push(InputcsPage)
  }

  toEdit(id) {
    id = id || '';
    // console.log(id)
    this.navCtrl.push(InputcsPage, {
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

  refresh(){
    this.ionViewDidLoad()
  }
}
