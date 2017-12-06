import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {first} from 'rxjs/operator/first';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  // user: User;
  user = {};
  constructor(private sharedService: SharedService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.route.params.subscribe(params => {
      this.user = this.sharedService.user || {};
      this.userId = this.user['_id'];
      this.userService.findUserById(this.userId)
        .subscribe((user) => {
          this.username = user.username;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.password = user.password;
          this.email = user.email;
        });
    });
  }

  update_user(userName, firstName, lastName, email) {
    const user = new User(this.userId, userName, this.password, firstName, lastName, email);
    this.userService.updateUser(this.userId, user)
      .subscribe((user1) => {
      this.user = user1;
    });
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }
}
