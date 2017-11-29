import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service.client';

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
  errorMsg: string;
  errorFlag: boolean;
  constructor(private sharedService: SharedService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register(username, password, verifyPassword) {
    this.userService.findUserByUsername(username)
      .subscribe((user1: User) => {
        if (user1 === null) {
          if (password === verifyPassword) {
            this.username = username;
            this.password = password;
            const newUser = new User('', this.username, this.password, null, null, null);
            /*this.userService.createUser(newUser)
              .subscribe((user2) => {
                this.router.navigate(['user/', user2._id]);
              });*/
            this.userService.register(this.username, this.password)
              .subscribe((user) => {
              this.sharedService.user = user;
              this.router.navigate(['/user']);
              });
          } else {
            this.errorMsg = 'Passwords do not match!';
            this.errorFlag = true;
          }
        } else {
          this.errorMsg = 'Username already exists!';
          this.errorFlag = true;
        }
      });

  }

}
