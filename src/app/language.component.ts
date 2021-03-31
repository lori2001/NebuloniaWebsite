import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  template : `<router-outlet></router-outlet>`
})
export class LanguageComponent implements OnInit {
  // IMPORTANT: Current layout supports only two languages
  // Adding a 3rd language might be tricky. You can ask me for help in case you need some (Szoke Lorand(creators' page))

  constructor(public activatedRoute : ActivatedRoute,
    public translate: TranslateService,
    private router: Router) {

    translate.addLangs(['hu', 'ro']);

    translate.setDefaultLang(this.translate.getLangs()[0]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params : Params) => {
        this.setLanguageAfterParams(params['lang']);
    });    
  }

  setLanguageAfterParams(language: string) {
    let ind: number, pg: string;
    if (this.translate.currentLang === undefined && language !== undefined )
    {
      ind = this.router.url.lastIndexOf(language) + language.length;
      pg = this.router.url.substring(ind);
      this.translate.use(language);
    }
    else if(language !== undefined && language !== this.translate.currentLang) {
      let found = false;
      for (const langs in this.translate.getLangs()) {
        if (language === this.translate.getLangs()[langs]) {
          found = true;
          break;
        }
      }
      
      if (!found) { // if the language requested wasn't loaded reset to default
        console.log(language, '- Language type not found! Resetting to default language instead.');
        this.translate.use(this.translate.getDefaultLang());
        this.router.navigate([this.translate.currentLang + '/not-found']);
      } else {
        ind = this.router.url.lastIndexOf(this.translate.currentLang);
        pg = this.router.url.substring(this.router.url.lastIndexOf(this.translate.currentLang) + this.translate.currentLang.length);
        this.translate.use(language);
      }
    }
  }

  public setLanguage(language: string) {
      let ind: number, pg: string;
      ind = this.router.url.lastIndexOf(this.translate.currentLang);
      pg = this.router.url.substring(this.router.url.lastIndexOf(this.translate.currentLang) + this.translate.currentLang.length);
      this.router.navigate([language + pg]);
  }
}