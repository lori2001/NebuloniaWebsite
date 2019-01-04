import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFittextModule } from 'angular-fittext';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// import ngx-translate and the http loader
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// import components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/app.navbar.component';
import { HomeComponent } from './components/home/app.home.component';
import { AboutComponent } from './components/about/app.about.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFittextModule,
    AngularFontAwesomeModule,

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
