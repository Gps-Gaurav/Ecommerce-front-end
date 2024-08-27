import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { login, signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private router: Router) { }
  showLogin = false;
  authError: String = '';

  ngOnInit(): void {
    this.seller.sellerAuthReload();
  }

  signUp(data: signUp): void {
    this.seller.userSignUp(data)
  }
  login(data: login): void {
    this.authError = "";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "email or password is incorrect";
      }
    })
  }
  openLogin() {
    this.showLogin = true
  }
  opensinUp() {
    this.showLogin = false
  }
}
