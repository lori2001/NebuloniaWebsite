import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-presidents',
  templateUrl: './app.presidents.component.html',
  styleUrls: ['./app.presidents.component.css']
})
export class PresidentsComponent {

  constructor(private translate: TranslateService) {
  }
}

