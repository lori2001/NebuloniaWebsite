import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  template: `<router-outlet></router-outlet>`,
})
export class LanguageComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['hu', 'ro']);

    translate.setDefaultLang(this.translate.getLangs()[0]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const langVar = 'lang';
      this.setLanguageAfterParams(params[langVar]);
    });
  }

  setLanguageAfterParams(language: string): void {
    if (language !== undefined) {
      let found = false;
      for (const langs in this.translate.getLangs()) {
        if (language === this.translate.getLangs()[langs]) {
          found = true;
          break;
        }
      }

      if (!found) {
        // if the language requested wasn't loaded reset to default
        console.log(
          language,
          '- Language type not found! Resetting to default language instead.'
        );
        this.translate.use(this.translate.getDefaultLang());
        this.router.navigate([this.translate.currentLang + '/not-found']);
      } else {
        this.translate.use(language);
      }
    } else {
      console.log('Language is undefined, thus can\'t be set!');
    }
  }

  private getPosition(str, subString, index): number {
    return str.split(subString, index).join(subString).length;
  }

  public setLanguage(language: string): void {
    let pg: string;
    pg = this.router.url.substring(this.getPosition(this.router.url, '/', 2));
    // pg = this.router.url.substring(this.router.url.lastIndexOf(this.translate.currentLang) + this.translate.currentLang.length);
    this.router.navigate([language + pg]);
  }

  // disables validance of "routerLinkActive" - replace with isRouteActive
  public goToRoute(route: string): void {
    this.router.navigate([this.translate.currentLang + route]);
  }
  public isRouteActive(route: string): boolean {
    let pg: string;
    pg = this.router.url.substring(this.getPosition(this.router.url, '/', 2));

    return pg === route;
  }

  public getLang(): string {
    return this.translate.currentLang;
  }
}
