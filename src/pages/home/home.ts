import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { BooksPage } from '../books/books';

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
  }
  bookList(){
    console.log('book list clicked');
    this.navCtrl.push('BooksPage');
  }
  searchBooks(){
    console.log('search books clicked');
  }
  reportList(){
    console.log('report list clicked');
  }
}
