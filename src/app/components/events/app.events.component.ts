import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

// Bugfix -> import custom-javascript code
declare function resizeFBPlugin(): any;

@Component({
  selector: 'app-events',
  templateUrl: './app.events.component.html',
  styleUrls: ['./app.events.component.css']
})
export class EventsComponent {

  constructor(private translate: TranslateService) {
  }

  resizeFB() {
    resizeFBPlugin();
  }
}
