import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { KidstoysComponent } from './kidstoys/kidstoys.component';
import { KidsdressComponent } from './kidsdress/kidsdress.component';
import { dealsComponent } from './deals/deals.component';
import { KidsshopeedealsComponent } from './deals/kidsshopeedeals/kidsshopeedeals.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path: 'kids',component:KidstoysComponent},
  {path: 'kidsd',component:KidsdressComponent},
  {path: 'deals',component:dealsComponent},
  {path: 'kidsshopeedeals',component:KidsshopeedealsComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
