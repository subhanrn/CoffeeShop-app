/* tslint:disable */
import {
  Review,
  Reviewer
} from '../index';

declare var Object: any;
export interface CoffeeShopInterface {
  "name": string;
  "city": string;
  "id"?: number;
  reviews?: Review[];
  reviewers?: Reviewer[];
}

export class CoffeeShop implements CoffeeShopInterface {
  "name": string;
  "city": string;
  "id": number;
  reviews: Review[];
  reviewers: Reviewer[];
  constructor(data?: CoffeeShopInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CoffeeShop`.
   */
  public static getModelName() {
    return "CoffeeShop";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CoffeeShop for dynamic purposes.
  **/
  public static factory(data: CoffeeShopInterface): CoffeeShop{
    return new CoffeeShop(data);
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
      name: 'CoffeeShop',
      plural: 'CoffeeShops',
      path: 'CoffeeShops',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        reviews: {
          name: 'reviews',
          type: 'Review[]',
          model: 'Review',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'coffeeShopId'
        },
        reviewers: {
          name: 'reviewers',
          type: 'Reviewer[]',
          model: 'Reviewer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'coffeeShopId'
        },
      }
    }
  }
}
