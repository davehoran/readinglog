import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BooklistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BooklistProvider {

  constructor(public http: Http) {
    console.log('Hello BooklistProvider Provider');

    const bookData = {
      "title" : "The Old Shoe",
      "author": "Some Body",
      "pages" : 100,

    }
  }

}
