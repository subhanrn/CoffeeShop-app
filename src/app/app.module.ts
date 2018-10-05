import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { AddReviewPage } from './../pages/add-review/add-review';
import { InputcsPage } from './../pages/inputcs/inputcs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IonicStorageModule } from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SDKBrowserModule } from '../shared/sdk/index';
import { InputReviewPage } from '../pages/input-review/input-review';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InputcsPage,
    AddReviewPage,
    InputReviewPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InputcsPage,
    AddReviewPage,
    InputReviewPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
