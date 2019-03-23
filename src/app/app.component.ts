import {LoopBackAuth} from '../shared/sdk/services/core';
import {Component, ViewChild} from '@angular/core';
import {LoadingController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserApi} from "../shared/sdk/services/custom";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: LoopBackAuth,
    public userApi: UserApi,
    public loadingCtrl: LoadingController,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: 'HomePage'},
      {title: 'Logout', component: null}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (!this.auth.getCurrentUserId()) {
        this.nav.setRoot('LoginPage')
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.component === null) {
      const loading = this.loadingCtrl.create({
        content: 'Logging Out...'
      });
      loading.present();
      this.userApi.logout().subscribe(
        success => {
          loading.dismiss();
          this.nav.setRoot('LoginPage');
        },
        err => {
          console.log(err);
          loading.dismiss();
          this.nav.setRoot('LoginPage');
        }
      )
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
