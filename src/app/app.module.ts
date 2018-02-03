import { SignupPage } from './../pages/signup/signup';
import { YoutubePage } from './../pages/youtube/youtube';
import { CoursePage } from './../pages/course/course';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseServiceProvider } from '../providers/course-service/course-service';
import { HttpModule } from '@angular/http';
import { NewsPage } from '../pages/news/news';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { CourseDetailPage } from '../pages/course-detail/course-detail';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { CustomerPage } from '../pages/customer/customer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage, 
    ContactPage,
    CoursePage,
    NewsPage,
    CourseDetailPage,
    YoutubePage,
    SignupPage,
    CustomerPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage, 
    ContactPage,
    CoursePage,
    NewsPage,
    CourseDetailPage,
    YoutubePage,
    SignupPage,
    CustomerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseServiceProvider,
    NewsServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
