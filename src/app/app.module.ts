import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
