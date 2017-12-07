import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { User } from '../models/user.model.client';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {
  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }
  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;
  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  register(username, password) {
    const url = this.baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const url = this.baseUrl + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((status) => {
        return status;
      });
  }

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }


  createUser(user: User) {
    const url = this.baseUrl + '/api/user/';
    return this.http.post(url, user)
      .map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    const newUser = new User(userId, user.username, user.password, user.firstName, user.lastName, user.email);
    return this.http.put(url, newUser)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}

