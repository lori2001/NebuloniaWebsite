import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.css']
})
export class HomeComponent {

  constructor() {
  }

  @Input() offset = -48;
}

