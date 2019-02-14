import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './app.points.component.html',
  styleUrls: ['./app.points.component.css']
})
export class PointsComponent {

  aspectRatio: number; // width/height ratio

  layoutTypes = ['1x4', '2x2', '4x1']; // all types of layout used
  currentLayout = this.layoutTypes[0]; // hold the layout currently in use

  constructor() {
    this.calcAspectRatio();
  }

  @HostListener('window:resize', ['$event'])
  calcAspectRatio() {
    this.aspectRatio = window.innerWidth / window.innerHeight;

    // changes layout type based on width and aspect ratio
    if (this.aspectRatio > 5 / 4) {
        this.currentLayout = this.layoutTypes[0];
    } else if (this.aspectRatio > 4 / 5) {
        this.currentLayout = this.layoutTypes[1];
    } else {
      this.currentLayout = this.layoutTypes[2];
    }
  }
}

