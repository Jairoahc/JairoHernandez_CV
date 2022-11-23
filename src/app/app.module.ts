import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { Page404Component } from './routes/page404/page404.component';
import { CardsComponent } from './components/cards/cards.component';
import { AboutComponent } from './components/about/about.component';
import { BannerdescComponent } from './components/bannerdesc/bannerdesc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    CardsComponent,
    AboutComponent,
    BannerdescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
