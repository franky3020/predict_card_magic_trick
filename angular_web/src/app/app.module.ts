import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipPageComponent } from './tip-page/tip-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MagicPageComponent } from './magic-page/magic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TipPageComponent,
    HomePageComponent,
    MagicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
