
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket.model';
import { Guitar } from 'src/app/models/guitar.model';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [DatePipe]
})
export class BasketComponent implements OnInit {

  public baskets!: Basket[];
  public user !: User;
  public totalPrice: number = 0;

  constructor(private basketService: BasketService,
    private userService: UserService,
    private orderService: OrderService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();

    if (this.user) {
      this.basketService.get(this.user.id!).subscribe(
        response => {
          this.baskets = response;
          console.log(this.baskets);
          response.forEach(element => {
            this.totalPrice += parseInt(element.guitar.price);
          });
        }
      );
    }
  }

  onOrder(guitar: Guitar) {
    var today: Date = new Date();



    var order: Order = { "user": this.user, "guitar": guitar, "price": guitar.price, "order_date": today };
    this.orderService.store(order);


  }

  onDelete(id: number) {
    this.basketService.delete(id);
    console.log(id);
    this.baskets.forEach((basket, index) => {
      if (basket.id === id) {

        this.baskets.splice(index, 1);
        this.totalPrice -= parseInt(basket.guitar.price);
      }
    });
  }

}
