import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './app.not-found.component.html',
  styleUrls: ['./app.not-found.component.css']
})
export class NotFoundComponent {

  constructor(public translate: TranslateService) {
  }

  setLanguage(language: string) {
    let langs: any;
    let found = false;
    let currlanguage: string;

    for ( langs in this.translate.getLangs() ) {
      if (language === this.translate.getLangs()[langs]) {
        currlanguage = language;
        found = true;
      }
    }

    // if the language requested wasn't loaded
    if (!found) {
      // print error message in console
      console.log('Language type not found! Resetting to default language instead.');
      // set current language to default
      currlanguage = this.translate.getDefaultLang();
    }

    // use the language last set (bugfix applied)
    this.translate.use(currlanguage);
  }
}

