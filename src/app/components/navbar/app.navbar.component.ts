import { Component, HostListener, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})
export class NavbarComponent {
  languages: string[] = ['hu', 'ro']; // default language defined in app.component.ts
  currlanguage: string; // holds currently diplayed language

  width = '100%'; // background width
  bgopacity = 0; // background opacity

  mobileMode = false; // enables/disables mobile mode
  collapse = true; // true if mobile style menu is collapsed

  constructor(private translate: TranslateService, public el: ElementRef) {
    // set current language to default when starting
    this.currlanguage = this.translate.getDefaultLang();

    // initialization stuff
    this.checkMobileMode();
    this.calcOpacity();
  }

  @HostListener('window:resize', ['$event'])
  checkMobileMode() {
    if ( window.innerWidth < 768) {
      this.mobileMode = true; // enables mobile mode
      this.bgopacity = 0; // no background as default
      this.width = '200px'; // width when shown
    } else {
      this.mobileMode = false; // disables mobile mode

      // max width
      this.width = '100%';
    }
  }
  @HostListener('window:scroll', ['$event'])
  calcOpacity() {
    if (!this.mobileMode) {

      // calculates the background opacity
      this.bgopacity = window.pageYOffset / window.innerHeight;

      // if it surpasses 1(100%) it is 1
      if (this.bgopacity > 1) {
        this.bgopacity = 1;
      }
    }
  }

  toggleNavbar() {

    // navbar toggle works only in mobile mode
    if (this.mobileMode) {
    this.collapse = !this.collapse;

      if (!this.collapse) {
        this.bgopacity = 1;
      } else {
        this.bgopacity = 0;
      }
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

