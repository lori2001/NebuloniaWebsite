import { Component, Input, HostListener, AfterViewChecked,  } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  styleUrls: ['./app.footer.component.css']
})
export class FooterComponent implements AfterViewChecked {
  pageHeight: number;

  constructor(private scrollToService: ScrollToService) { }

  scrollToTop() {
    const speed = 2; // how many pixels/milisecond ?

    const config: ScrollToConfigOptions = {
      offset: -this.pageHeight,
      duration: (this.pageHeight / speed)
    };

    this.scrollToService.scrollTo(config);
  }

  ngAfterViewChecked() {
    this.calcHeight();
  }

  calcHeight() {
    this.pageHeight = document.body.scrollHeight;
  }

}

