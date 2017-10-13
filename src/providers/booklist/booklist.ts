import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
