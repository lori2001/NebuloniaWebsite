import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-events',
  templateUrl: './app.events.component.html',
  styleUrls: ['./app.events.component.css']
})
export class EventsComponent {

  constructor(private translate: TranslateService) {

  }
}
