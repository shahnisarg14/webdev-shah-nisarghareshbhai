import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {first} from 'rxjs/operator/first';

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
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      const user = this.userService.findUserById(this.userId);
      this.username = user.username;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.password = user.password;
    });
  }

  update_user(userName, firstName, lastName) {
    const user = new User(this.userId, userName, this.password, firstName, lastName);
    if (this.userService.updateUser(this.userId, user)) {
    }
  }
}
