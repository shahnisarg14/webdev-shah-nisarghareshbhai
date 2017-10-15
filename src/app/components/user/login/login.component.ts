import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  user: User;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.user = this.userService.findUserByCredentials(username, password);
    if (this.user) {
      this.router.navigate(['user/', this.user._id]);
    }
  }

}
