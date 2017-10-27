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
  errorMsg = 'Passwords do not match!';
  errorFlag: boolean;
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register(username, password, verifyPassword) {
    if (password === verifyPassword) {
      const user = new User('', username, password, '', '');
      this.userService.createUser(user).subscribe((user1) => {
        this.user = user1;
        this.router.navigate(['/login']);
      });
      } else {
      this.errorFlag = true;
    }
  }

}
