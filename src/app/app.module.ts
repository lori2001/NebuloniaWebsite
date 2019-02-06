import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFittextModule } from 'angular-fittext';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// import ngx-translate and the http loader
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// owl carousel
import { OwlModule } from 'ngx-owl-carousel';

// manages which component gets displayed and when
import { AppRoutingModule } from './app.routes';
// scrolling (somewhat part of routing)
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// primeng
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';

// import components
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/app.main.component';
import { NavbarComponent } from './components/navbar/app.navbar.component';
import { HomeComponent } from './components/home/app.home.component';
import { AboutComponent } from './components/about/app.about.component';
import { PresidentsComponent } from './components/presidents/app.presidents.component';
import { EventsComponent } from './components/events/app.events.component';
import { NotFoundComponent } from './components/not-found/app.not-found.component';
import { ContactComponent } from './components/contact/app.contact.component';
import { SponsorsComponent } from './components/sponsors/app.sponsors.component';
import { FooterComponent } from './components/footer/app.footer.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent, // Contains routing
    MainComponent, // Main Page
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      PresidentsComponent,
      EventsComponent,
      ContactComponent,
      SponsorsComponent,
      FooterComponent,

    NotFoundComponent // 404 Page
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFittextModule,
    AngularFontAwesomeModule,

    // routing
    ScrollToModule.forRoot(),
    AppRoutingModule,

    // owl carousel
    OwlModule,

    // primeng
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    ButtonModule,

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
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
