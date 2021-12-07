import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  withdrawForm: FormGroup;
  accountType: string[] = ['PRIMARY', 'SAVINGS'];
  default: string = 'PRIMARY';
  submitted: boolean = false;
  statusMessage:string="";
  constructor(private userAccountService:UserAccountService,private router:Router) {
    this.withdrawForm = new FormGroup({
      account: new FormControl(null),
      amount:new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$")]),
    });
    this.withdrawForm.controls['account'].setValue(this.default, {onlySelf: true});
    
   }
  ngOnInit(): void {
  }
  withdrawMoney()
  {
    this.submitted=true;
    console.log(this.f.account.value);
    console.log(this.withdrawForm.value.amount);
    if (this.withdrawForm.invalid) {
      return;
    }
    if (this.f.account.value=="PRIMARY") {
        this.userAccountService.withdrawInUserPrimaryAccount(this.withdrawForm.value.amount).subscribe(res=>{
          console.log(res);
          this.statusMessage="Money Deposited Successfully"
        setTimeout(()=>{                           // <<<---using ()=> syntax
          this.router.navigate(['user/home']);
      }, 2000);
        });
    }
    else{
      this.userAccountService.withdrawInUserSavingsAccount(this.withdrawForm.value.amount).subscribe(res=>{
        console.log(res);
        this.statusMessage="Money Deposited Successfully"
        setTimeout(()=>{                           // <<<---using ()=> syntax
          this.router.navigate(['user/home']);
      }, 2000);
      }); 
    }
  }
  get f() { return this.withdrawForm.controls; }


}
