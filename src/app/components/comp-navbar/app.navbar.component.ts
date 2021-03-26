import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { LanguageComponent } from 'src/app/language.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})
export class NavbarComponent extends LanguageComponent implements OnInit {
  width = '100%'; // background width
  bgopacity = 0; // background opacity

  mobileMode = false; // enables/disables mobile mode
  collapse = true; // true if mobile style menu is collapsed

  mainPage = false; // checks and applies offset to links whether the user is on main page or not
  get MainPage(): boolean {
    return this.mainPage;
  }
  @Input()
  set MainPage(value: boolean) {
    this.mainPage = value;
  }

  // 0 - zeroOpacity, 1 - dependable, 2>= - fullOpacity
  opacityType = 1; // different background opacity calculations

  constructor(activatedRoute : ActivatedRoute,
    translate: TranslateService,
    router: Router,
    location: Location)
  {
    super(activatedRoute, translate, router, location);
    
    // initialization stuff
    this.checkMobileMode();
    this.calcOpacity();
  }

  ngOnInit() {} // disables reinitialization of language component(thus speedin up page)

  get OpacityType(): number {
    return this.opacityType;
  }

  @Input()
  set OpacityType(value: number) {
    this.opacityType = value;
    if (this.opacityType !== 1) {
      // should return full opacity background except for mobileMode
      this.checkMobileMode();
      this.calcOpacity();
    }
  }

  @Input() offset = -48;

  @HostListener('window:resize', [])
  checkMobileMode() {
    if ( window.innerWidth < 768) {
      this.mobileMode = true; // enables mobile mode
      this.bgopacity = 0; // no background as default
      this.collapse = true; // resolves a bug on mobile
      this.width = '200px'; // width when shown
    } else {
      this.mobileMode = false; // disables mobile mode

      this.width = '100%'; // max width
      this.calcOpacity(); // controls this.bgopacity
    }
  }
  @HostListener('window:scroll', [])
  calcOpacity() {
    if (!this.mobileMode) {
      // calculate opacity differently based on what opacity type is used
      if (this.opacityType === 0) {
        this.bgopacity = 0;
      } else if (this.opacityType === 1) {
        // calculates the background opacity
        this.bgopacity = window.pageYOffset / window.innerHeight;

        // if it surpasses 1(100%) it is 1
        if (this.bgopacity > 1) {
          this.bgopacity = 1;
        }
      } else {
        this.bgopacity = 1;
      }
    }
  }

  toggleNavbar() {
    // navbar toggle shows only in mobile mode
    if (this.mobileMode) {
    this.collapse = !this.collapse;

    if (!this.collapse) {
        this.bgopacity = 1;
      } else {
        this.bgopacity = 0;
      }
    }
  }
}

