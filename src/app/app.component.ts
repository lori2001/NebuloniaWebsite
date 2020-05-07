import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    // change version number in these when language packs change to avoid catching issues!
    // always add one to the version to avoid reusage of old versions

    // IMPORTANT: Current layout supports only two languages
    // Ask me(Szoke Lorand(creators' page)) if you want to add a third language (because it's tricky to get right)
    translate.addLangs(['huV4', 'roV4']);

    translate.setDefaultLang(this.translate.getLangs()[0]);
    this.translate.currentLang = this.translate.getLangs()[0];
  }
}
