import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  styleUrls: ['./app.footer.component.css']
})
export class FooterComponent {
  @Input() offset = -48;
}

