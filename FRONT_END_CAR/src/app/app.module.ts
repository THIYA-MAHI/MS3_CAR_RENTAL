import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './LANDING_PAGE/components/landing-page/landing-page.component';
import { ContactUsComponent } from './LANDING_PAGE/components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
