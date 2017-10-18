import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookListPage } from '../book-list/book-list';
import { ReadBookPage } from '../read-book/read-book';
import { ReportsPage } from '../reports/reports';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController) {

  }
  readCurrentBook(){
    console.log('read book clicked');
    this.navCtrl.push(ReadBookPage);
  }
  bookList(){
    console.log('book list clicked');
    this.navCtrl.push(BookListPage);
  }
  searchBooks(){
    console.log('search books clicked');
  }
  reportList(){
    console.log('report list clicked');
    this.navCtrl.push(ReportsPage);
  }
}
