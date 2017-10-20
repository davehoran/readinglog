import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AngularFireAuthProvider {

  constructor(
    public http: Http,
    private firebaseAuth: AngularFireAuth
  ) {
    console.log('Hello AngularFireAuthProvider Provider');
  }

  signup(email: string, password: string) {
  this.firebaseAuth
     .auth
     .createUserWithEmailAndPassword(email, password)
     .then(value => {
       console.log('Success!', value);
     })
     .catch(err => {
       console.log('Something went wrong:',err.message);
     });
   }
   
   login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
    }

    logout() {
      this.firebaseAuth
        .auth
        .signOut();
    }

}
