import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListReviewPage } from './list-review';

@NgModule({
  declarations: [
    ListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ListReviewPage),
  ],
})
export class ListReviewPageModule {}
