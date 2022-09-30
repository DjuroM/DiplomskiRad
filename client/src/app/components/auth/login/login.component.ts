import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public emailError!: string;
  public passwordError!: string;

  @Input() path !: { pathBack: string, id: string };


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.loginForm)

    if (this.loginForm.status === "INVALID") {
      if (this.loginForm.controls['email'].status === "INVALID") {
        console.log('Email je los')
        this.emailError = 'Email is not valid'
      } else {
        this.emailError = '';
      }

      if (this.loginForm.controls['password'].status === "INVALID") {
        console.log('password je los')
        this.passwordError = 'Password is required';
      } else {
        this.passwordError = '';
      }
    } else if (this.loginForm.status === "VALID") {
      this.passwordError = '';
      this.emailError = '';

      const email = this.loginForm.value['email'];
      const password = this.loginForm.value['password']

      this.userService.getUser(email, password).subscribe(
        response => {
          if (response) {
            this.userService.setUser(response);
            Swal.fire(
              'Welcome back ' + response.username,
              'Have fun shopping!',
              'success'
            )
            if (this.path.pathBack === 'orders') {
              this.router.navigate(['/orders']);
            } else {
              this.router.navigate(['/guitarItem/' + this.path.id]);
            }

          }

        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      )


    }



  }

}
