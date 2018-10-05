import { UserApi } from './../shared/sdk/services/custom/User';
import { LoopBackAuth } from './../shared/sdk/services/core/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: LoopBackAuth,
    public userApi: UserApi
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Logout', component: null }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (!this.auth.getCurrentUserId()) {
        this.nav.setRoot(LoginPage)
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
    } else {
      // let token:string = this.auth.getAccessTokenId()
      // this.userApi.logout(token).subscribe(
      //   success => {
      //     this.nav.setRoot(LoginPage);
      //   },
      //   err => {
      //     console.log(err)
      //   }
      // )

    }
  }
}
