import { Component } from '@angular/core';
import { ArchiveElement } from 'src/app/models/archive.element';

@Component({
  selector: 'app-archive',
  templateUrl: './app.archive.component.html',
  styleUrls: ['./app.archive.component.css']
})
export class ArchiveComponent {

  archiveElements: ArchiveElement[];
  presidentsWidth: '80%';

  constructor() {
    this.archiveElements = [
      { year: '2017-2018',
        presidents: [{ url: '../../../assets/images/archive/2017-18/presidents/home_secretary.jpg',
                      name: 'Csutak Zsolt',
                      position: 'presidents.home_secretary'},
                      { url: '../../../assets/images/archive/2017-18/presidents/president.jpg',
                      name: 'Imbrea Olivér',
                      position: 'presidents.president' },
                      { url: '../../../assets/images/archive/2017-18/presidents/financial.jpg',
                      name: 'Józsa Kriszta',
                      position: 'presidents.financial' },
                      { url: '../../../assets/images/archive/2017-18/presidents/legal_representative.jpg',
                      name: 'Römer-Ambrus Júlia',
                      position: 'presidents.legal_representative' },
                      { url: '../../../assets/images/archive/2017-18/presidents/spokesman.jpg',
                      name: 'Keresztes Péter',
                      position: 'presidents.spokesman' },
                      { url: '../../../assets/images/archive/2017-18/presidents/foreign_secretary.jpg',
                      name: 'Sandi Stefánia',
                      position: 'presidents.foreign_secretary' },
                      { url: '../../../assets/images/archive/2017-18/presidents/documentations.jpg',
                      name: 'Marica Edina',
                      position: 'presidents.documentations' },
                      { url: '../../../assets/images/archive/2017-18/presidents/technological.jpg',
                      name: 'Balogh Dávid',
                      position: 'presidents.technological' },
                      { url: '../../../assets/images/archive/2017-18/presidents/radio.jpg',
                      name: 'Keresztes Szende',
                      position: 'presidents.radio' },
                    ],
        images:  [{ url: '../../../assets/images/archive/2017-18/images/image1.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image2.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image3.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image4.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image5.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image6.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image7.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image8.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image9.jpg' },
                  { url: '../../../assets/images/archive/2017-18/images/image10.jpg' }]
    }];
  }
}
