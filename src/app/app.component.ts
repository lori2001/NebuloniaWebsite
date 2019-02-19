import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="inprogress">Work in progress..</div>
    <router-outlet></router-outlet>
  `,
  styles: ['.inprogress { z-index: 200; color:white; position: fixed; right:0; margin-top:10px; margin-right:15px; overflow: hidden;}']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['hu', 'ro']);
    translate.setDefaultLang('hu');
    this.translate.currentLang = 'hu';
  }
}
