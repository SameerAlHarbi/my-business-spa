import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

  loggedInChanged = new EventEmitter<void>();

  private loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );

    return promise;
  }

  login() {
    this.loggedIn = true;
    this.loggedInChanged.emit();
  }

  logout() {
    this.loggedIn = false;
    this.loggedInChanged.emit();
  }

}
