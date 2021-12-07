import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) {
    this.user=this.userService.getUser();
   }
user:any;
primaryBalance:string|null="";
savingsBalance:string|null="";
primaryAccountNo:string|null="";
savingsAccountNo:string|null="";

email:string="";
  ngOnInit(): void {
    // console.log(localStorage.getItem('primaryBalance'));
    
      // this.primaryBalance=localStorage.getItem('primaryBalance');
      // this.savingsBalance=localStorage.getItem('savingsBalance');
      // this.primaryAccountNo=localStorage.getItem('primaryAccountNo');
      // this.savingsAccountNo=localStorage.getItem('savingsAccountNo');
      // console.log(this.primaryBalance);
this.getUserProfile();
    
    
  }
  getUserProfile()
  {
    this.email=localStorage.getItem('email')+""
      this.userService.getUserProfile(this.email).subscribe(res=>{
        console.log(res);
        if(res.primaryAccount!=null)
        {
          this.primaryBalance=res.primaryAccount.balance;
          this.primaryAccountNo=res.primaryAccount.accountNo;
        }
        if(res.savingsAccount!=null)
        {
          this.savingsBalance=res.savingsAccount.balance;
          this.savingsAccountNo=res.savingsAccount.accountNo;
        }

        
        

      })

  }
  GoToDeposit(){
    this.router.navigate(['user/deposit'])
  }
  goToWithdrawal()
  {
    this.router.navigate(['user/withdraw'])
  }

}
