import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { KidstoysComponent } from './kidstoys/kidstoys.component';
import { KidsdressComponent } from './kidsdress/kidsdress.component';
import { DealsComponent } from './deals/deals.component';
import { KidsshopeedealsComponent } from './deals/kidsshopeedeals/kidsshopeedeals.component';
import { CounterComponent } from './counter/counter.component';
import { AdsComponent } from './ads/ads.component';
import { AllimgComponent } from './allimg/allimg.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';

import { CartItemsComponent } from './cart-items/cart-items.component';
import { CounterchildComponent } from './counterchild/counterchild.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    CardsComponent,
    HomeComponent,
    SearchComponent,
    KidstoysComponent,
    KidsdressComponent,
    DealsComponent,
    KidsshopeedealsComponent,
    CounterComponent,
    AdsComponent,
    AllimgComponent,
    RegisterComponent,
    ContactusComponent,
    ProductdetailsComponent,
    LoginComponent,
    CartItemsComponent,
    CounterchildComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
