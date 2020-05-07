import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './app.about.component.html',
  styleUrls: ['./app.about.component.css']
})
export class AboutComponent {
  presentationState = 'none'; // hidden

  constructor() {}

  @ViewChild('presentation', {static: false}) presentation: ElementRef;
  stopPresVideo() {
    if (this.presentation !== undefined) {
      this.presentation.nativeElement.pause();
    }
  }

  showPresentation() {
    this.presentationState = 'block'; // show
  }

  hidePresentation() {
    this.presentationState = 'none'; // hide
    this.stopPresVideo();
  }
}

