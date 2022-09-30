import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { BasketComponent } from './components/basket/basket.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GuitarItemComponent } from './components/guitar-item/guitar-item.component';
import { GuitarDetailComponent } from './components/guitars/guitar-detail/guitar-detail.component';
import { GuitarListItemComponent } from './components/guitars/guitar-list/guitar-list-item/guitar-list-item.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { HomeComponent } from './components/home/home.component';
import { LogOffComponent } from './components/log-off/log-off.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserReviewEditComponent } from './components/user-profile/user-reviews/user-review-edit/user-review-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'guitars',  component: GuitarsComponent, children: [
      { path: ':id', component: GuitarDetailComponent }
    ]
  },
  // { path: 'guitars/:id', component: GuitarsComponent },
  { path: 'guitarItem/:id', component: GuitarItemComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'logOut', component: LogOffComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'reviewsGuitar/:id', component: ReviewsComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'editReview/:id', component: UserReviewEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
