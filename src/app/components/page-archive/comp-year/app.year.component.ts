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

  images: any;

  ngOnInit() {
   this.images = [
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image1.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image2.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image3.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image4.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image5.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image6.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image7.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image8.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image9.jpg'},
      { src: '../../../assets/images/archive/' + this.archiveElement.year + '/images/image10.jpg'}];
  }

}
