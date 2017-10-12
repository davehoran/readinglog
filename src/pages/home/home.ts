import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



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
  }
  searchBooks(){
    console.log('search books clicked');
  }
  reportList(){
    console.log('report list clicked');
  }
}
