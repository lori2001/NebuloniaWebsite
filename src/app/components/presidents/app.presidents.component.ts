import { HostListener, Component, Input } from '@angular/core';
import { PresidentsElement } from 'src/app/models/presidents.element';

@Component({
  selector: 'app-presidents',
  templateUrl: './app.presidents.component.html',
  styleUrls: ['./app.presidents.component.css']
})
export class PresidentsComponent {
  width = '80%'; // width of the whole section
  inputWidth = '0%'; // responsible for changing width if entered in parent class

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

  @Input() offset = -48;
  @Input() presidentsElement: PresidentsElement[];
  @Input() set setWidth (value: string) {
    this.inputWidth = value;
    this.checkResolution();
  }

  constructor() {
    this.checkResolution();
  }

    // Responsive width
    @HostListener('window:resize', ['$event'])
    checkResolution() {
      if (this.inputWidth === '0%') {
        if (window.innerWidth < 576) {
          this.width = '100%';
        } else if (window.innerWidth < 992) {
          this.width = '90%';
        } else if (window.innerWidth  < 1200) {
          this.width = '80%';
        } else {
          this.width = '60%';
        }
      } else {
        this.width = this.inputWidth;
      }
    }
}

