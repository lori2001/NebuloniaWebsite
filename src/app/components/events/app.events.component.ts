import { Component, AfterViewInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

// Bugfix -> import custom-javascript code
 declare function initFBPlugin(): any;

@Component({
  selector: 'app-events',
  templateUrl: './app.events.component.html',
  styleUrls: ['./app.events.component.css']
})
export class EventsComponent {

  fbInitalized = false;

  constructor(private translate: TranslateService) {
  }

  /*Bugfix*/
  resizeFB() {
    if (!this.fbInitalized) {
      initFBPlugin();
      this.fbInitalized = true;
    }
  }
}
