import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // properties
  user: User;
  verifyPassword: string;
  password: string;
  username: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register(username, password, verifyPassword) {
    if (password === verifyPassword) {
      const user = new User('', username, password, '', '');
      this.user = this.userService.createUser(user);
      if (this.userService.findUserById(this.user._id)) {
        this.router.navigate(['/login']);
      }
    }
  }

}
