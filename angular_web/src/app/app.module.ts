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
import {MatDialogModule} from '@angular/material/dialog';

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
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
