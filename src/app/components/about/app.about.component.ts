import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './app.about.component.html',
  styleUrls: ['./app.about.component.css']
})
export class AboutComponent {

  constructor(private translate: TranslateService) {
  }
}

