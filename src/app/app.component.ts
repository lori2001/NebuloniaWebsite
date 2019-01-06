import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CarouselElement } from './models/carousel.element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.translate.instant ('site_name');
  presidents: CarouselElement[];

  constructor(private translate: TranslateService) {
    translate.addLangs(['hu', 'ro']);
    translate.setDefaultLang('hu');
      this.presidents = [
        { url: '../../../assets/images/presidents/home_secretary.jpg',
          name: 'Kirsch Edgár',
          position: 'presidents.home_secretary'},
        { url: '../../../assets/images/presidents/president.jpg',
          name: 'Vencz Balázs',
          position: 'presidents.president' },
        { url: '../../../assets/images/presidents/human_resources.jpg',
          name: 'Bencze Erik Tamás',
          position: 'presidents.human_resources' },
        { url: '../../../assets/images/presidents/foreign_secretary.jpg',
          name: 'Szekrény Eveline',
          position: 'presidents.foreign_secretary' },
        { url: '../../../assets/images/presidents/communications.jpg',
          name: 'Kelemen Tamás',
          position: 'presidents.communications' },
        { url: '../../../assets/images/presidents/documentations.jpg',
          name: 'Römer-Ambrus Júlia',
          position: 'presidents.documentations' },
        { url: '../../../assets/images/presidents/financial.jpg',
          name: 'Bucescu Andreea',
          position: 'presidents.financial' },
        { url: '../../../assets/images/presidents/technological.jpg',
          name: 'Kristó Attila',
          position: 'presidents.technological' }
      ];
    }
}
