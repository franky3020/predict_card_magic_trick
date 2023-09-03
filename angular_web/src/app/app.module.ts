import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipPageComponent } from './tip-page/tip-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MagicPageComponent } from './magic-page/magic-page.component';
import { LearnPageComponent } from './learn-page/learn-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RemindPopupComponent } from './component/remind-popup/remind-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TipPageComponent,
    HomePageComponent,
    MagicPageComponent,
    LearnPageComponent,
    RemindPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
