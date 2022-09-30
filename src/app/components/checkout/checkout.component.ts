import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Basket } from 'src/app/models/basket.model';
import { Country } from 'src/app/models/country.model';
import { User } from 'src/app/models/user.model';
import { BasketService } from 'src/app/services/basket.service';
import { CountryService } from 'src/app/services/country.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public user !: User;
  public basket !: Basket[];
  public countries !: Country[];

  public firstFormGroup !: FormGroup;
  public secondFormGroup !: FormGroup;

  constructor(private userService: UserService,
    private basketService: BasketService,
    private orderService: OrderService,
    private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {

    this.user = this.userService.getLoggedUser();

    this.basketService.get(this.user.id!).subscribe(
      response => {
        this.basket = response;
      }
    )

    this.firstFormGroup = new FormGroup({
      'name': new FormControl(this.user.name, Validators.required),
      'surname': new FormControl(this.user.surname, Validators.required),

      'email': new FormControl(this.user.email, [Validators.email, Validators.required]),
      'postalcode': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
      'country': new FormControl(null, Validators.required)

    });
    this.secondFormGroup = new FormGroup({
      'card': new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      'ccv': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),


    })




    this.basketService.get(this.user.id!).subscribe(
      response => {
        this.basket = response;
      }
    );

    this.countryService.getAll().subscribe(
      response => {
        this.countries = response
      }
    )

  }

  order() {
    let country = this.firstFormGroup.value['country'];
    this.basket.forEach((basket, index) => {
      this.orderService.storeWithCountry({
        "order_date": new Date(),
        "country": country, "guitar": basket.guitar,
        "user": this.user, "price": basket.guitar.price
      });
      this.basketService.delete(basket.id!);
      if (index === this.basket.length - 1) {

        Swal.fire({
          title: 'Auto close alert!',
          html: 'I will close in 3000 milliseconds.',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()


          },
          willClose: () => {
            clearInterval(3000)
            this.router.navigate(['/orders']);
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      }
    });


  }

}
