import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './app.about.component.html',
  styleUrls: ['./app.about.component.css']
})
export class AboutComponent {
  clicks:number = 0;
  modelIsActive:boolean = false;
  showModel(){
    this.clicks++;
    if(this.clicks >= 3) {
      this.clicks = 0;
      this.modelIsActive = true;
    }
  }
}

