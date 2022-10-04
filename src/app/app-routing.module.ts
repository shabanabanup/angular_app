import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { KidstoysComponent } from './kidstoys/kidstoys.component';
import { KidsdressComponent } from './kidsdress/kidsdress.component';
import { DealsComponent } from './deals/deals.component';
import { KidsshopeedealsComponent } from './deals/kidsshopeedeals/kidsshopeedeals.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent }     from './admin/admin.component';



const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'cards',component:CardsComponent},
  {path: 'kids',component:KidstoysComponent},
  {path: 'kidsd',component:KidsdressComponent},
  {path: 'deals',component:DealsComponent},
  {path: 'kidsshopeedeals',component:KidsshopeedealsComponent},
  {path:'register',component:RegisterComponent},
  {path: 'contact',component:ContactusComponent},
  {path: 'prod_details',component:ProductdetailsComponent},
  {path: 'login',component:LoginComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'admin',component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
