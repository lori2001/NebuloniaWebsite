import { HostListener, Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CarouselElement } from 'src/app/models/carousel.element';

@Component({
  selector: 'app-presidents',
  templateUrl: './app.presidents.component.html',
  styleUrls: ['./app.presidents.component.css']
})
export class PresidentsComponent {
  width = '60%'; // width of the whole section
  carouselElements: CarouselElement[];

  constructor(private translate: TranslateService) {
    this.checkResolution();

    this.translate.get('presidents').subscribe( translations => {
      this.carouselElements = [
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
    });
  }

  /*owl carousel options from https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */
  public sliderOPT: any = {
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    rewind: true,
    autoplayHoverPause: true,
    items: 3,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        }
    }
  };

    // Responsive width
    @HostListener('window:resize', ['$event'])
    checkResolution() {
      if (window.innerWidth < 576) {
        this.width = '100%';
      } else if (window.innerWidth < 992) {
        this.width = '90%';
      } else if (window.innerWidth  < 1200) {
        this.width = '80%';
      } else {
        this.width = '60%';
      }
    }
}

