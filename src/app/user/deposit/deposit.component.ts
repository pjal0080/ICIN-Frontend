import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  depositForm: FormGroup;
  accountType: string[] = ['PRIMARY', 'SAVINGS'];
  default: string = 'PRIMARY';
  submitted: boolean = false;
  statusMessage:string="";
  constructor(private userAccountService:UserAccountService,private router:Router) {
    this.depositForm = new FormGroup({
      account: new FormControl(null),
      amount:new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$")]),
    });
    this.depositForm.controls['account'].setValue(this.default, {onlySelf: true});
    
   }
  ngOnInit(): void {
  }
  depositMoney()
  {
    this.statusMessage="";
    this.submitted=true;
    console.log(this.f.account.value);
    console.log(this.depositForm.value.amount);
    if (this.depositForm.invalid) {
      return;
    }
    if (this.f.account.value=="PRIMARY") {
        this.userAccountService.depositInUserPrimaryAccount(this.depositForm.value.amount).subscribe(res=>{
          console.log(res);
          // this.depositForm.reset();
          this.statusMessage="Money Deposited Successfully"
          setTimeout(()=>{                           // <<<---using ()=> syntax
            this.router.navigate(['user/home']);
        }, 2000);

        });
    }
    else{
      this.userAccountService.depositInUserSavingsAccount(this.depositForm.value.amount).subscribe(res=>{
        console.log(res);
        this.submitted=false;
        // this.depositForm.controls['amount'].reset();
        this.statusMessage="Money Deposited Successfully"
        setTimeout(()=>{                           // <<<---using ()=> syntax
          this.router.navigate(['user/home']);
      }, 2000);
      }); 
    }
  }
  get f() { return this.depositForm.controls; }





}
