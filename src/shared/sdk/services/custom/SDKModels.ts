/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Message } from '../../models/Message';
import { CoffeeShop } from '../../models/CoffeeShop';
import { Review } from '../../models/Review';
import { Reviewer } from '../../models/Reviewer';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Message: Message,
    CoffeeShop: CoffeeShop,
    Review: Review,
    Reviewer: Reviewer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
