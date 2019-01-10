import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './app.not-found.component.html',
  styleUrls: ['./app.not-found.component.css']
})
export class NotFoundComponent {

  constructor(private translate: TranslateService) {
  }
}

