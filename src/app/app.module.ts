import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// import ngx-translate and the http loader
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// device detector
import { DeviceDetectorModule } from 'ngx-device-detector';

// owl carousel
import { OwlModule } from 'ngx-owl-carousel';

// scrolling (somewhat part of routing)
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// primeng
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';

// manages which component gets displayed and when
import { AppRoutingModule } from './app.routes';

// import components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/comp-navbar/app.navbar.component';
import { PresidentsComponent } from './components/comp-presidents/app.presidents.component';
import { NotFoundComponent } from './components/page-not-found/app.not-found.component';
import { ArchiveComponent } from './components/page-archive/app.archive.component';
import { PointsComponent } from './components/page-points/app.points.component';
import { CreatorsComponent } from './components/page-creators/app.creators.component';
import { MainComponent } from './components/page-main/app.main.component';
import { HomeComponent } from './components/page-main/comp-home/app.home.component';
import { AboutComponent } from './components/page-main/comp-about/app.about.component';
import { EventsComponent } from './components/page-main/comp-events/app.events.component';
import { ContactComponent } from './components/page-main/comp-contact/app.contact.component';
import { SponsorsComponent } from './components/page-main/comp-sponsors/app.sponsors.component';
import { FooterComponent } from './components/comp-footer/app.footer.component';
import { AdminComponent } from './components/page-admin/app.admin.component';
import { YearComponent } from './components/page-archive/comp-year/app.year.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent, // Contains routing

    // Pages
    MainComponent,
    ArchiveComponent,
    PointsComponent,
    CreatorsComponent,
    NotFoundComponent, // 404 Page
    AdminComponent,

    // Other Components
    NavbarComponent,
    FooterComponent,
    PresidentsComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    ContactComponent,
    SponsorsComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,

    // detection of browsers and devices
    DeviceDetectorModule.forRoot(),

    // scrolling
    ScrollToModule.forRoot(),

    // routing
    AppRoutingModule,

    // owl carousel
    OwlModule,

    // primeng
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    PasswordModule,

     // translate modules
     HttpClientModule,
     TranslateModule.forRoot({
         loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpClient]
         }
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
