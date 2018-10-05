/* tslint:disable */
import {
  CoffeeShop,
  Reviewer
} from '../index';

declare var Object: any;
export interface ReviewInterface {
  "date": Date;
  "rating"?: number;
  "comments": string;
  "id"?: number;
  "coffeeShopId"?: number;
  "publisherId"?: number;
  coffeeShop?: CoffeeShop;
  reviewer?: Reviewer;
}

export class Review implements ReviewInterface {
  "date": Date;
  "rating": number;
  "comments": string;
  "id": number;
  "coffeeShopId": number;
  "publisherId": number;
  coffeeShop: CoffeeShop;
  reviewer: Reviewer;
  constructor(data?: ReviewInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Review`.
   */
  public static getModelName() {
    return "Review";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Review for dynamic purposes.
  **/
  public static factory(data: ReviewInterface): Review{
    return new Review(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Review',
      plural: 'Reviews',
      path: 'Reviews',
      idName: 'id',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "rating": {
          name: 'rating',
          type: 'number'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "coffeeShopId": {
          name: 'coffeeShopId',
          type: 'number'
        },
        "publisherId": {
          name: 'publisherId',
          type: 'number'
        },
      },
      relations: {
        coffeeShop: {
          name: 'coffeeShop',
          type: 'CoffeeShop',
          model: 'CoffeeShop',
          relationType: 'belongsTo',
                  keyFrom: 'coffeeShopId',
          keyTo: 'id'
        },
        reviewer: {
          name: 'reviewer',
          type: 'Reviewer',
          model: 'Reviewer',
          relationType: 'belongsTo',
                  keyFrom: 'publisherId',
          keyTo: 'id'
        },
      }
    }
  }
}
