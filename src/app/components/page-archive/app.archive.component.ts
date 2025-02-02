import { Component, HostListener } from '@angular/core';
import { ArchiveElement } from 'src/app/models/archive.element';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-archive',
  templateUrl: './app.archive.component.html',
  styleUrls: ['./app.archive.component.css']
})
export class ArchiveComponent {

  archiveElements: ArchiveElement[];
  offset = -48;
  today = new Date();

  constructor() {
    this.calcOffset();
    this.archiveElements = [
      { year: '2016-2017',
      presidents: [ { url: '../../../assets/images/archive/2016-2017/presidents/technical.jpg',
                    name: 'Nagy Edward',
                    position: 'presidents.technical' },
                    { url: '../../../assets/images/archive/2016-2017/presidents/president.jpg',
                    name: 'Petki Pál Milán',
                    position: 'presidents.president' },
                    { url: '../../../assets/images/archive/2016-2017/presidents/documentations.jpg',
                    name: 'Marica Edina',
                    position: 'presidents.documentations' },
                    { url: '../../../assets/images/archive/2016-2017/presidents/foreign_secretary.jpg',
                    name: 'Keresztes Péter',
                    position: 'presidents.foreign_secretary' },
                    { url: '../../../assets/images/archive/2016-2017/presidents/radio.jpg',
                    name: 'Keresztes Szende',
                    position: 'presidents.radio' },
                    { url: '../../../assets/images/archive/2016-2017/presidents/home_secretary.jpg',
                    name: 'Dinka Levente',
                    position: 'presidents.home_secretary'},
                    { url: '../../../assets/images/archive/2016-2017/presidents/human_resources.jpg',
                    name: 'Pál-Jakab Áron',
                    position: 'presidents.human_resources' },
                    { url: '../../../assets/images/archive/2016-2017/presidents/financial.jpg',
                    name: 'Pál Amanda',
                    position: 'presidents.documentations' }
                  ]
      },
      { year: '2017-2018',
      presidents: [{ url: '../../../assets/images/archive/2017-2018/presidents/home_secretary.jpg',
                    name: 'Csutak Zsolt',
                    position: 'presidents.home_secretary'},
                    { url: '../../../assets/images/archive/2017-2018/presidents/president.jpg',
                    name: 'Imbrea Olivér',
                    position: 'presidents.president' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/financial.jpg',
                    name: 'Józsa Kriszta',
                    position: 'presidents.financial' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/legal_representative.jpg',
                    name: 'Römer-Ambrus Júlia',
                    position: 'presidents.legal_representative' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/spokesman.jpg',
                    name: 'Keresztes Péter',
                    position: 'presidents.spokesman' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/foreign_secretary.jpg',
                    name: 'Sandi Stefánia',
                    position: 'presidents.foreign_secretary' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/documentations.jpg',
                    name: 'Marica Edina',
                    position: 'presidents.documentations' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/technical.jpg',
                    name: 'Balogh Dávid',
                    position: 'presidents.technical' },
                    { url: '../../../assets/images/archive/2017-2018/presidents/radio.jpg',
                    name: 'Keresztes Szende',
                    position: 'presidents.radio' }
                  ]
      },
      { year: '2018-2019',
      presidents: [{ url: '../../../assets/images/archive/2018-2019/presidents/home_secretary.jpg',
                    name: 'Kirsch Edgár',
                    position: 'presidents.home_secretary'},
                  { url: '../../../assets/images/archive/2018-2019/presidents/president.jpg',
                    name: 'Vencz Balázs',
                    position: 'presidents.president' },
                  { url: '../../../assets/images/archive/2018-2019/presidents/human_resources.jpg',
                    name: 'Bencze Erik Tamás',
                    position: 'presidents.human_resources' },
                  { url: '../../../assets/images/archive/2018-2019/presidents/foreign_secretary.jpg',
                    name: 'Szekrény Eveline',
                    position: 'presidents.foreign_secretary' },
                  { url: '../../../assets/images/archive/2018-2019/presidents/communications.jpg',
                    name: 'Kelemen Tamás',
                    position: 'presidents.communications' },
                  { url: '../../../assets/images/archive/2018-2019/presidents/documentations.jpg',
                    name: 'Römer-Ambrus Júlia',
                    position: 'presidents.documentations' },
                  { url: '../../../assets/images/archive/2018-2019/presidents/financial.jpg',
                    name: 'Bucescu Andreea',
                    position: 'presidents.financial' },
                  { url: '../../../assets/images/archive/2018-2019/presidents/technical.jpg',
                    name: 'Kristó Attila',
                    position: 'presidents.technical' }
                  ]
      },
      { year: '2019-2020',
      presidents: [{ url: '../../../assets/images/presidents2019/vice_president.jpg',
                    name: 'Kelemen Tamás',
                    position: 'presidents.vice_president'},
                  { url: '../../../assets/images/presidents2019/president.jpg',
                    name: 'Nagy Tibor',
                    position: 'presidents.president' },
                  { url: '../../../assets/images/presidents2019/technical.jpg',
                    name: 'Szőke András-Loránd',
                    position: 'presidents.technical' },
                  { url: '../../../assets/images/presidents2019/foreign_secretary.jpg',
                    name: 'Bokor Tünde',
                    position: 'presidents.foreign_secretary' },
                  { url: '../../../assets/images/presidents2019/radio.jpg',
                    name: 'Lázár Miklós Hunor',
                    position: 'presidents.radio' },
                  { url: '../../../assets/images/presidents2019/documentations.jpg',
                    name: 'Szekrény Eveline',
                    position: 'presidents.documentations' },
                  { url: '../../../assets/images/presidents2019/financial.jpg',
                    name: 'Benedek Orsolya',
                    position: 'presidents.financial' },
                    { url: '../../../assets/images/presidents2019/human_resources.jpg',
                    name: 'Nagy Tamás',
                    position: 'presidents.human_resources' }
                  ]
        }
    ];

    // easter egg -> santa themed logo for winter
    const month = formatDate(this.today, 'MM', 'en-US', '+0530');
    if (month === '12') {
      this.oldLogoLocation = '../../../assets/images/archive/logo-change-event/old-logo-santa.png';
      this.santaTheme = true;
    }

  }

  clicks = 0;
  santaTheme = false;
  oldLogoLocation = '../../../assets/images/archive/logo-change-event/old-logo.png';
  oldLogoEasterEgg() {
    // easter egg -> change logo if clicked
    this.clicks++;
    if (this.clicks >= 3) {
      this.oldLogoLocation = '../../../assets/images/archive/logo-change-event/old-logo-baker.png';
    }
    if (this.clicks >= 8) {
      this.oldLogoLocation = '../../../assets/images/archive/logo-change-event/old-logo-basketball.png';
    }
    if (this.clicks >= 12) {
      if (this.santaTheme) {
        this.oldLogoLocation = '../../../assets/images/archive/logo-change-event/old-logo-santa.png';
      } else {
        this.oldLogoLocation =  '../../../assets/images/archive/logo-change-event/old-logo.png';
      }
      this.clicks = 0;
    }
  }

  @HostListener('window:resize', [])
  calcOffset() {
    if (window.innerWidth < 768) {
      this.offset = 0;
    } else {
      this.offset = -48;
    }
  }
}
