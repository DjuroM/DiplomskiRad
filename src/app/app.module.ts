import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { GuitarItemComponent } from './components/guitar-item/guitar-item.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { BasketComponent } from './components/basket/basket.component';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { LogOffComponent } from './components/log-off/log-off.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { LoginModalComponent } from './components/auth-modal/login-modal/login-modal.component';
import { SignupModalComponent } from './components/auth-modal/signup-modal/signup-modal.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserReviewsComponent } from './components/user-profile/user-reviews/user-reviews.component';
import { UserReviewEditComponent } from './components/user-profile/user-reviews/user-review-edit/user-review-edit.component';
import { GuitarListComponent } from './components/guitars/guitar-list/guitar-list.component';
import { GuitarListItemComponent } from './components/guitars/guitar-list/guitar-list-item/guitar-list-item.component';
import { GuitarDetailComponent } from './components/guitars/guitar-detail/guitar-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GuitarsComponent,
    GuitarItemComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    OrdersComponent,
    BasketComponent,
    CheckoutComponent,
    ReviewsComponent,
    ReviewComponent,
    LogOffComponent,
    AuthModalComponent,
    LoginModalComponent,
    SignupModalComponent,
    UserProfileComponent,
    UserReviewsComponent,
    UserReviewEditComponent,
    GuitarListComponent,
    GuitarListItemComponent,
    GuitarDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
