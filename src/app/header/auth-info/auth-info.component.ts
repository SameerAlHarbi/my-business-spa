import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.css']
})
export class AuthInfoComponent implements OnInit {

  userAuthenticated = true;

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    this.userAuthenticated= true;
  }

  onLogout() {
    this.userAuthenticated= false;
  }
}
