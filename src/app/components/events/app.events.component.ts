import { Component, AfterViewInit } from '@angular/core';

// Bugfix -> import custom-javascript code
 declare function initFBPlugin(): any;

@Component({
  selector: 'app-events',
  templateUrl: './app.events.component.html',
  styleUrls: ['./app.events.component.css']
})
export class EventsComponent {

  fbInitalized = false;

  constructor() {
  }

  /*Bugfix*/
  resizeFB() {
    if (!this.fbInitalized) {
      initFBPlugin();
      this.fbInitalized = true;
    }
  }
}
