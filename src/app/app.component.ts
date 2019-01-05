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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('hu');
/*
    this.translate.get('presidents').subscribe( translations => {
      this.carousel = [
        { url: '../../../assets/images/presidents/home_secretary.jpg',
          name: 'Kirsch Edgár',
          position: translations.home_secretary},
        { url: '../../../assets/images/presidents/president.jpg',
          name: 'Vencz Balázs',
          position: translations.president },
        { url: '../../../assets/images/presidents/human_resources.jpg',
          name: 'Bencze Erik Tamás',
          position: translations.human_resources },
        { url: '../../../assets/images/presidents/foreign_secretary.jpg',
          name: 'Szekrény Eveline',
          position: translations.foreign_secretary },
        { url: '../../../assets/images/presidents/communications.jpg',
          name: 'Kelemen Tamás',
          position: translations.communications },
        { url: '../../../assets/images/presidents/documentations.jpg',
          name: 'Römer-Ambrus Júlia',
          position: translations.documentations },
        { url: '../../../assets/images/presidents/financial.jpg',
          name: 'Bucescu Andreea',
          position: translations.financial },
        { url: '../../../assets/images/presidents/technological.jpg',
          name: 'Kristó Attila',
          position: translations.technological }
      ];
    });*/
  }
}
