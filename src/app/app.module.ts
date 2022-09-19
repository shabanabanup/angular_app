import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { KidstoysComponent } from './kidstoys/kidstoys.component';
import { KidsdressComponent } from './kidsdress/kidsdress.component';
import { dealsComponent } from './deals/deals.component';
import { KidsshopeedealsComponent } from './deals/kidsshopeedeals/kidsshopeedeals.component';
import { CounterComponent } from './counter/counter.component';
import { AdsComponent } from './ads/ads.component';
import { AllimgComponent } from './allimg/allimg.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    CardsComponent,
    HomeComponent,
    SearchComponent,
    KidstoysComponent,
    KidsdressComponent,
    dealsComponent,
    KidsshopeedealsComponent,
    CounterComponent,
    AdsComponent,
    AllimgComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
