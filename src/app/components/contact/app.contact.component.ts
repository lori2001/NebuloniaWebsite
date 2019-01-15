import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.component.html',
  styleUrls: ['./app.contact.component.css']
})
export class ContactComponent {

  constructor(private translate: TranslateService) {
  }
}
