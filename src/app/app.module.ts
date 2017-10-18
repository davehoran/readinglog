import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/book-list/book-list';
import { ReadBookPage } from '../pages/read-book/read-book';
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
=======
import { ReportsPage } from '../pages/reports/reports';
>>>>>>> 9ab7530af7f5d61cb25a4b412f38c812010198d1

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookListPage,
    ReadBookPage,
<<<<<<< HEAD
    LoginPage,
    RegisterPage
=======
    ReportsPage
>>>>>>> 9ab7530af7f5d61cb25a4b412f38c812010198d1
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookListPage,
    ReadBookPage,
<<<<<<< HEAD
    LoginPage,
    RegisterPage
=======
    ReportsPage
>>>>>>> 9ab7530af7f5d61cb25a4b412f38c812010198d1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
