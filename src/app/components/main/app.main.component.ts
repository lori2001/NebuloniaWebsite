import { Component, HostListener } from '@angular/core';
import { PresidentsElement } from 'src/app/models/presidents.element';
import { LinkElement } from 'src/app/models/link.element';

@Component({
  selector: 'app-main',
  templateUrl: './app.main.component.html',
  styleUrls: ['./app.main.component.css']
})
export class MainComponent {
  presidents: PresidentsElement[];
  sponsors: LinkElement[];

  // due to mobile mode's small menu the offset of navigation icons should change
  offset = -48;

  constructor() {
    this.calcOffset();

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
      { url: '../../../assets/images/presidents/technical.jpg',
        name: 'Kristó Attila',
        position: 'presidents.technical' }
    ];

    // at least 7 items are recommended
    this.sponsors = [
      { url: '../../../assets/images/sponsors/sponsor1.jpg' },
      { url: '../../../assets/images/sponsors/sponsor2.jpg' },
      { url: '../../../assets/images/sponsors/sponsor3.jpg' },
      { url: '../../../assets/images/sponsors/sponsor4.jpg' },
      { url: '../../../assets/images/sponsors/sponsor5.jpg' },
      { url: '../../../assets/images/sponsors/sponsor6.jpg' },
      { url: '../../../assets/images/sponsors/sponsor7.jpg' }
    ];
    }

    @HostListener('window:resize', ['$event'])
    calcOffset() {
      if ( window.innerWidth < 768) {
        this.offset = 0;
      } else {
        this.offset = -48;
      }
    }
}
