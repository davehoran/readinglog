import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("BookListPage constructor run...");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

}
