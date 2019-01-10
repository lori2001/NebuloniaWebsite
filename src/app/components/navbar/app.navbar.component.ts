import { Component, HostListener, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})
export class NavbarComponent {
  width = '100%'; // background width
  bgopacity = 0; // background opacity

  mobileMode = false; // enables/disables mobile mode
  collapse = true; // true if mobile style menu is collapsed
  offset = -48; // due to mobile mode's small menu the offset should change

  constructor(public translate: TranslateService) {
    // initialization stuff
    this.checkMobileMode();
    this.calcOpacity();
  }

  @HostListener('window:resize', ['$event'])
  checkMobileMode() {
    if ( window.innerWidth < 768) {
      this.mobileMode = true; // enables mobile mode

      this.bgopacity = 0; // no background as default
      this.collapse = true; // resolves a bug on mobile
      this.offset = 0;
      this.width = '200px'; // width when shown
    } else {
      this.mobileMode = false; // disables mobile mode

      this.offset = -48;
      this.width = '100%'; // max width
      this.calcOpacity(); // controls this.bgopacity
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
    // navbar toggle shows only in mobile mode
    if (this.mobileMode) {
    this.collapse = !this.collapse;

      if (!this.collapse) {
        this.bgopacity = 1;
      } else {
        this.bgopacity = 0;
      }
    }
  }

  setLanguage(language: string) {
    let langs: any;
    let found = false;
    let currlanguage: string; // holds currently diplayed language

    for ( langs in this.translate.getLangs() ) {
      if (language === this.translate.getLangs()[langs]) {
        currlanguage = language;
        found = true;
      }
    }

    // if the language requested wasn't loaded
     if (!found) {
      // print error message in console
      alert('Language type not found! Resetting to default languge instead.');
      // set current language to default
      currlanguage = this.translate.getDefaultLang();
    }

    // use the language last set (bugfix applied)
    this.translate.use(currlanguage);
    this.translate.currentLang = currlanguage;
  }
}

