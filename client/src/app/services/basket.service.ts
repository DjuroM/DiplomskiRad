import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private baseURL = "http://127.0.0.1:8000/api/basket";

  constructor(private http: HttpClient, private router: Router) { }

  public addToBasket(basket: Basket) {
    this.http.post(`${this.baseURL}`, { "user_id": basket.user.id, "guitar_id": basket.guitar.id }).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/basket'])
      }
    )
  }
  public delete(id: number) {
    this.http.delete(`${this.baseURL}/${id}`).subscribe(
      response => {
        console.log(response)
      }
    )
  }

  public get(id: number): Observable<Basket[]> {
    return this.http.get<Basket[]>(`${this.baseURL}User/${id}`);
  }
}
