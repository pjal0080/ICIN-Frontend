import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.removeItem('token');
    localStorage.setItem('user_id', "");
    localStorage.setItem('user_role', "");
    console.log("logOut");
    this.router.navigate(['login']);
  }
  goToUserHome()
  {
    this.router.navigate(['user/home']);
  }
  transferMoney()
  {
    console.log("getUserAccounts");
    this.router.navigate(['user/transfer']);
  }
  sendChequeRequest()
  {
    console.log("getChequeBookRequest");
    this.router.navigate(['user/request']);
  }
  transactionHistory()
  {
    console.log("transactionHistory");
    this.router.navigate(['user/transaction']);
  }
  viewProfile()
  {
    console.log("viewProfile");
    this.router.navigate(['user/profile']);
  }

}
