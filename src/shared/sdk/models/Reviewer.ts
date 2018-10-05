/* tslint:disable */
import {
  Review
} from '../index';

declare var Object: any;
export interface ReviewerInterface {
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "coffeeShopId"?: number;
  "password"?: string;
  accessTokens?: any[];
  reviews?: Review[];
}

export class Reviewer implements ReviewerInterface {
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": number;
  "coffeeShopId": number;
  "password": string;
  accessTokens: any[];
  reviews: Review[];
  constructor(data?: ReviewerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Reviewer`.
   */
  public static getModelName() {
    return "Reviewer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Reviewer for dynamic purposes.
  **/
  public static factory(data: ReviewerInterface): Reviewer{
    return new Reviewer(data);
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
      name: 'Reviewer',
      plural: 'Reviewers',
      path: 'Reviewers',
      idName: 'id',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "coffeeShopId": {
          name: 'coffeeShopId',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        reviews: {
          name: 'reviews',
          type: 'Review[]',
          model: 'Review',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publisherId'
        },
      }
    }
  }
}
