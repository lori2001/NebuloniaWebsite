import { HostListener, Component, Input, ViewChild, ElementRef } from '@angular/core';
import { PresidentsElement } from 'src/app/models/presidents.element';

@Component({
  selector: 'app-presidents',
  templateUrl: './app.presidents.component.html',
  styleUrls: ['./app.presidents.component.css']
})
export class PresidentsComponent {
  width = '80%'; // width of the whole section
  inputWidth = '0%'; // responsible for changing width if entered in parent class

   // EASTEREGG START
   presentationState = 'none'; // hidden
   clicks: number[] = [0, 0, 0, 0, 0];
   // EASTEREGG END

  @Input() offset = -48;
  @Input() presidentsElement: PresidentsElement[];
  @Input() set sliderWidth(value: string) {
    this.inputWidth = value;
    this.checkResolution();
  }
  @Input() titleLink = true; // if false the title doesn't link to anything
  @Input() height = 'auto';

  /*owl carousel options from https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */
  sliderOPT: any = {
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

  constructor() {
    this.checkResolution();
    this.hidePresentation();
  }

  // EASTEREGG START
  @ViewChild('presentation') presentation: ElementRef;
  stopPresVideo() {
    if (this.presentation !== undefined) {
      this.presentation.nativeElement.pause();
    }
  }

  countAndCheck(index: number) {
    if (index < 3) { // use only first three pics
      this.clicks[index]++;

      if ( this.clicks[0] >= 1 &&
           this.clicks[1] >= 1 &&
           this.clicks[2] >= 2 ) {
        this.presentationState = 'block'; // show
      }
    }
  }

  hidePresentation() {
    this.presentationState = 'none'; // hide
    this.clicks = [0, 0, 0, 0, 0]; // reset clicks
    this.stopPresVideo();
  }
  // EASTEREGG END

    // Responsive width
    @HostListener('window:resize', [])
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

