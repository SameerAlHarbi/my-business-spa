import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.css']
})
export class AuthInfoComponent implements OnInit {

  userAuthenticated = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService
      .loggedInChanged.subscribe(
      () => {
        this.authService
        .isAuthenticated().then(
          (authenticated: boolean) => {
            this.userAuthenticated = authenticated;
          });
      });
  }

  onLogin(){
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
