import { NotePage } from './../pages/note/note';
import { CoursePage } from './../pages/course/course';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about'; 
import { NewsPage } from '../pages/news/news';
import { CustomerPage } from '../pages/customer/customer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าหลัก', component: HomePage },
      { title: 'เกี่ยวกับเรา', component: AboutPage },
      { title: 'คอร์สเรียน', component: CoursePage },
      { title: 'ข่าวสาร', component: NewsPage },
      { title: 'ลูกค้า', component: CustomerPage},
      { title: 'โน็ต', component: NotePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
