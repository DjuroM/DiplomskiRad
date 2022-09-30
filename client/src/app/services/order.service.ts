import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',

})
export class OrderService {

  private baseURL = "http://127.0.0.1:8000/api/order";


  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router) { }


  public getOrdersByUser(id: number): Observable<Order[]> {

    return this.http.get<Order[]>(`${this.baseURL}User/${id}`);

  }

  public deleteOrder(id: number) {
    this.http.delete(`${this.baseURL}/${id}`).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  public store(order: Order) {
    this.http.post(`${this.baseURL}`, {
      "user_id": order.user.id, "guitar_id": order.guitar.id
      , "order_date": this.datePipe.transform(order.order_date, "yyyy-MM-dd"), "price": order.price
    }).subscribe(
      response => console.log(response)
    );
  }

  public storeWithCountry(order: Order) {
    this.http.post(`${this.baseURL}`, {
      "user_id": order.user.id, "guitar_id": order.guitar.id
      , "order_date": this.datePipe.transform(order.order_date, "yyyy-MM-dd"), "price": order.price,
      "country_id": order.country?.id
    }).subscribe(
      response => {
        console.log(response)
      }
    );
  }

}


