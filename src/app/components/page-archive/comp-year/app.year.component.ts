import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ArchiveElement } from 'src/app/models/archive.element';

@Component({
  selector: 'app-year',
  templateUrl: './app.year.component.html',
  styleUrls: ['./app.year.component.css']
})
export class YearComponent implements OnInit {
  @Input() offset = -48;
  @Input() archiveElement: ArchiveElement;

  lowResImages: any;
  images: any;

  ngOnInit() {
   this.images = [
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (1).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (2).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (3).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (4).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (5).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (6).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (7).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (8).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (9).jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/high-res (10).jpg'}];

   this.lowResImages = [
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (1).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (2).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (3).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (4).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (5).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (6).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (7).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (8).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (9).jpg'},
        { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/low-res (10).jpg'}];
  }
}
