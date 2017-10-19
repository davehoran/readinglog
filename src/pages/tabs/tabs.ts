import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BookListPage } from '../book-list/book-list';
import { ReadBookPage } from '../read-book/read-book';
import { ReportsPage } from '../reports/reports';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BookListPage;
  tab3Root = ReadBookPage;
  tab4Root = ReportsPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
