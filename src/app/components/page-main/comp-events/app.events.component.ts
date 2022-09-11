import { Component, AfterViewChecked, HostListener } from '@angular/core';

// imports from custom-scripts.js
declare function resizeFBPlugin(): any;
declare function initFBPlugin(): any;

@Component({
  selector: 'app-events',
  templateUrl: './app.events.component.html',
  styleUrls: ['./app.events.component.css'],
})
export class EventsComponent implements AfterViewChecked {
  fbInitalized = false;

  ngAfterViewChecked() {
    if (!this.fbInitalized) {
      initFBPlugin();
      this.fbInitalized = true;
    }
  }

  @HostListener('window:resize', [])
  resizeFB() {
    resizeFBPlugin();
  }
}
