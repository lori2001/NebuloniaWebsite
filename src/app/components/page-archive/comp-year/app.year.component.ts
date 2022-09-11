import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ArchiveElement } from 'src/app/models/archive.element';

@Component({
  selector: 'app-year',
  templateUrl: './app.year.component.html',
  styleUrls: ['./app.year.component.css'],
})
export class YearComponent implements OnInit {
  @Input() offset = -48;
  @Input() archiveElement: ArchiveElement;

  thumbnails: any;
  images: any;

  ngOnInit() {
    this.images = [
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/1.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/2.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/3.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/4.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/5.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/6.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/7.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/8.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/9.jpg',
      },
      {
        src:
          './assets/images/archive/' +
          this.archiveElement.year +
          '/images/10.jpg',
      },
    ];

    this.thumbnails = [
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/1.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/2.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/3.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/4.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/5.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/6.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/7.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/8.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/9.jpg',
      },
      {
        src:
          './assets/images/archive/[thumbnails]/' +
          this.archiveElement.year +
          '/images/10.jpg',
      },
    ];
  }
}
