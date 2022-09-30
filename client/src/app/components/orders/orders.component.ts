import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guitar } from 'src/app/models/guitar.model';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public user !: User;
  public orders !: Order[];
  public opensReview: boolean = false;
  public review!: { user: User, guitar: Guitar };

  constructor(private userService: UserService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();

    if (this.user) {
      this.orderService.getOrdersByUser(this.user.id!).subscribe(
        response => {
          this.orders = response;
          console.log(response);
        }
      );
    }
  }

  openReview(order: Order) {
    this.opensReview = !this.opensReview;

    this.review = { user: order.user, guitar: order.guitar }
  }

  delete(id: number) {
    this.orderService.deleteOrder(id);

    this.orders.forEach((basket, index) => {
      if (basket.id === id) {

        this.orders.splice(index, 1);

      }
    });
  }

}
