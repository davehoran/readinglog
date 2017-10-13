import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadBookPage } from './read-book';

@NgModule({
  declarations: [
    ReadBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadBookPage),
  ],
})
export class ReadBookPageModule {}
