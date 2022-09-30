import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user !: User;

  private baseURL = "http://127.0.0.1:8000/api/user";

  public loggedUser: Subject<User | undefined> = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  public setUser(user: User) {
    this.user = user;
    this.loggedUser.next(user);
  }

  public removeLoggedUser() {
    let tempUser: User;
    this.user = tempUser!;
    this.loggedUser.next(undefined);
    console.log(this.user)
  }

  public getLoggedUser(): User {
    return this.user;
  }

  public getUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}ByEmail/${email}/${password}`);
  }

  public addUser(user: User, path: string) {
    this.http.post<User>(`${this.baseURL}`, user).subscribe(
      response => {
        console.log(response)
        this.setUser(response);
        Swal.fire(
          'Welcome ' + user.username,
          'Glad to have you on board! Have fun shopping!',
          'success'
        )
        this.router.navigate([path]);
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User with that email already exists',
        })
      })
  }

  public updateUser(user: User) {
    this.http.put<User>(`${this.baseURL}/${user.id}`, { "name": user.name, "surname": user.surname, "username": user.username, "email": user.email, "password": user.password }).subscribe(
      response => {
        console.log(response);
        this.setUser(response);
      }
    );
  }
}
