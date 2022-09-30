import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  public path!: { pathBack: string, id: string };

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.userService.getLoggedUser()) {
      Swal.fire('You are already logged in!');
      this.router.navigate(['/orders']);
    }
    this.path = { pathBack: this.route.snapshot.queryParams['pathBack'], id: this.route.snapshot.queryParams['id'] };
    // if(this.)
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }



}
