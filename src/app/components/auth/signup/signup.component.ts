import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public firstFormGroup!: FormGroup;
  @Input() path !: { pathBack: string, id: string };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required),

    });
  }

  onSubmit() {
    if (this.firstFormGroup.status === 'VALID') {
      let name = this.firstFormGroup.value.name;
      let surname = this.firstFormGroup.value.surname;
      let username = this.firstFormGroup.value.username;
      let email = this.firstFormGroup.value.email;
      let password = this.firstFormGroup.value.password;

      let user: User = { "name": name, "surname": surname, "username": username, "email": email, "password": password };

      if (this.path.pathBack === 'orders') {
        this.userService.addUser(user, '/orders');
      } else {

        this.userService.addUser(user, '/guitarItem/' + this.path.id);
      }




    } else {
      console.log('h')
    }
  }

}
