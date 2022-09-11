import { HostListener, Component, Input } from '@angular/core';
import { LinkElement } from 'src/app/models/link.element';

@Component({
  selector: 'app-sponsors',
  templateUrl: './app.sponsors.component.html',
  styleUrls: ['./app.sponsors.component.css'],
})
export class SponsorsComponent {
  width = '75%'; // width of the whole section

  /*owl carousel options from https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */
  public sliderOPT: any = {
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    loop: true,
    autoplayHoverPause: true,
    items: 6,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      250: {
        items: 2,
      },
      450: {
        items: 3,
      },
      576: {
        items: 5,
      },
      768: {
        items: 6,
      },
      950: {
        items: 7,
      },
    },
  };

  @Input() carouselElements: LinkElement[];

  constructor() {
    this.checkResolution();
  }

  // Responsive width
  @HostListener('window:resize', [])
  checkResolution() {
    if (window.innerWidth < 576) {
      this.width = '100%';
    } else if (window.innerWidth < 992) {
      this.width = '95%';
    } else if (window.innerWidth < 1200) {
      this.width = '85%';
    } else {
      this.width = '75%';
    }
  }
}
