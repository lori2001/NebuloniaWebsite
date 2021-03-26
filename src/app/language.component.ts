import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {Location} from '@angular/common';

@Component({
  template : `<router-outlet></router-outlet>`
})
export class LanguageComponent implements OnInit {
  // IMPORTANT: Current layout supports only two languages
  // Adding a 3rd language might be tricky. You can ask me for help (Szoke Lorand(creators' page))
  langVer: string;

  currLangNoVer: string;//  current language no version

  constructor(public activatedRoute : ActivatedRoute,
    public translate: TranslateService,
    private router: Router,
    private location: Location) {

    // change version number when language packs change to avoid catching issues!
    // always add one to the version to avoid reusage(caching) of old versions
    this.langVer = 'V8';

    translate.addLangs(['hu' + this.langVer, 'ro' + this.langVer]);

    translate.setDefaultLang(this.translate.getLangs()[0]);
    this.translate.currentLang = this.translate.getLangs()[0];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params : Params) => {
        this.setLanguageAddVer(params['lang']);
    });    
  }

  public setLanguageAddVer(language: string) {
    if(language !== undefined && language !== this.currLangNoVer) {
      this.setLanguageNoChecks(language + this.langVer);
    }
  }

  public setLanguage(language: string) {
    if(language !== undefined && language !== this.translate.currentLang) {
      this.setLanguageNoChecks(language);
    }
  }

  setLanguageNoChecks(language: string) {
      let found = false;
      let currlanguage: string;

      for (const langs in this.translate.getLangs()) {
        if (language === this.translate.getLangs()[langs]) {
          currlanguage = language;
          found = true;
          break;
        }
      }

      // if the language requested wasn't loaded
      if (!found) {
        // print warning message in console
        console.log(language, '- Language type not found! Resetting to default language instead.');
        // set current language to default
        currlanguage = this.translate.getDefaultLang();
      }

      // use the language set
      this.translate.use(currlanguage);
      this.currLangNoVer = currlanguage.substring(0, currlanguage.length - this.langVer.length);

      if (!found) {
        this.router.navigate([this.currLangNoVer + '/not-found']);
      } else {
        // update url bar
        const pg = this.router.url.substring(this.router.url.lastIndexOf('/'));
        this.location.go(this.currLangNoVer + pg);
      }
  }
}