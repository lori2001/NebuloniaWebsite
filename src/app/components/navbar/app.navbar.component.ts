import { Component, HostListener, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})
export class NavbarComponent {
  // default language defined in app.component.ts
  // the UI currently supports only 2 languages (dropdwon language switcher is recommended)
  // append this string only if you added the json file in assets/i18n
  languages: string[] = ['hu', 'ro'];
  bgopacity = 0; // background opacity ( defaults to 0 )

  // holds currently diplayed language
  currlanguage: string;

  constructor(private translate: TranslateService, public el: ElementRef) {
    // set current language to default when starting
    this.currlanguage = this.translate.getDefaultLang();
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  checkScroll() {
    // calculates the background opacity
    this.bgopacity = window.pageYOffset / window.innerHeight;

    // if it surpasses 1 (100%) it is 1
    if (this.bgopacity > 1) {
      this.bgopacity = 1;
    }
}

  changeLanguage(language: string) {

    // if the specified language is available
     if (language === this.languages[0] || language === this.languages[1]) {
      this.currlanguage = language;
    } else { // if undefined
      // print error message in console
      alert('Language type not found! Resetting to default languge instead.');
      // set current language to default
      this.currlanguage = this.translate.getDefaultLang();
    }

    // use the language last set
    this.translate.use(this.currlanguage);
  }
}

