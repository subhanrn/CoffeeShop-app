import {CoffeeShopApi} from '../../shared/sdk/services/custom';
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ReviewApi} from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public input = {};
  public listcofee: any;
  public listreview: any;
  public pageType = '0';
  public title = '';

  constructor(
    public navCtrl: NavController,
    public coffeeShopApi: CoffeeShopApi,
    public reviewApi: ReviewApi,
  ) {
  }


  ionViewDidEnter() {
    this.coffeeShopApi.find().subscribe(
      listcofee => {
        // console.log(listcofee)
        this.listcofee = listcofee
      },
      err => {
        console.log(err)
      }
    );


    this.reviewApi.find({
      "include": ["coffeeShop", "reviewer"]
    }).subscribe(
      listreview => {

        this.listreview = listreview;
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
    this.navCtrl.push('AddReviewPage')
  }

  toInput() {
    this.navCtrl.push('InputcsPage')
  }

  toEdit(id) {
    id = id || '';
    // console.log(id)
    this.navCtrl.push('InputcsPage', {
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

  refresh() {
    this.ionViewDidEnter()
  }
}
