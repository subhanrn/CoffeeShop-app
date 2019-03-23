import { CoffeeShopApi } from '../../shared/sdk/services/custom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inputcs',
  templateUrl: 'inputcs.html',
})
export class InputcsPage {
  public input = {};
  public id: number;
  // public coffee = {};
  public title = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coffeeShopApi: CoffeeShopApi
  ) {
    this.id = navParams.get('id');
    // this.coffee = navParams.get('coffee');
  }

  updateCofee() {
    delete this.input['id'];
    // console.log(this.input)
    this.coffeeShopApi.updateAttributes(this.id, this.input).subscribe(
      () => {
        this.navCtrl.pop()
        // console.log(updatecofee)
      },
      err => {
        console.log(err)
      }
    )
  }

  addCofee() {
    if (!this.id) {
      this.coffeeShopApi.create(this.input).subscribe(
        () => {
          this.navCtrl.pop()
          // console.log(inputcofee)

        },
        err => {
          console.log(err)
        }
      )
    } else {
      this.updateCofee()
    }

  }

  deleteCofee() {
    this.coffeeShopApi.deleteById(this.id).subscribe(
      () => {
        this.navCtrl.pop()
      },
      err => {
        console.log(err)
      }
    )
  }

  ionViewDidLoad() {
    this.title = 'Input CoffeeShop';
    if (this.id) {
      this.title = 'Update CoffeeShop';
      this.coffeeShopApi.find({
        "where": {
          "id": this.id
        }
      }).subscribe(
        selectedcoffee => {
          this.input = selectedcoffee[0];
          // console.log(this.input)

        },
        err => {
          console.log(err)
        }
      )

      // console.log('ada id')
    }

    // console.log('ionViewDidLoad InputcsPage');
    // console.log(this.id)
    // console.log(this.coffee)
  }

}
