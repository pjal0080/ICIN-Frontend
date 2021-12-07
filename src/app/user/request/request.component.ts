import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  accountType: string[] = ['PRIMARY', 'SAVINGS'];
  accountType1: string[] = ['PRIMARY', 'SAVINGS'];
  default: string = 'PRIMARY';
  default1: string = 'PRIMARY';
  isPrimary:Boolean=false;
  isSavings:Boolean=false;
  accountTypeForm: FormGroup;
  accountTypeForm1: FormGroup;
  statusMessage:string="";
  statusMessage1:string="";

  constructor(private userAccountService:UserAccountService) {
      this.accountTypeForm = new FormGroup({
        account: new FormControl(null)
      });
      this.accountTypeForm.controls['account'].setValue(this.default, {onlySelf: true});
      this.accountTypeForm1 = new FormGroup({
        account: new FormControl(null)
      });
      this.accountTypeForm1.controls['account'].setValue(this.default1, {onlySelf: true});
    }
  ngOnInit(): void {
      // this.checkPrimaryAccountStatus();
      // this.checkSavingsAccountStatus();
  }
  checkStatus()
  {
    console.log(this.accountTypeForm1.value.account);
    if(this.accountTypeForm1.value.account==="PRIMARY")
    {
      this.checkPrimaryAccountStatus();
    }
    else{
      this.checkSavingsAccountStatus();
    }
  }

  checkPrimaryAccountStatus()
  {
     this.userAccountService.checkPrimaryAccountStatus().subscribe(res=>{
         this.isPrimary=res;
         console.log(res);
         if(res==true)
         {
            this.statusMessage="Check Book has been issued";
         }
         else{
          this.statusMessage="Check Book has not been issued yet";
         }
     })
  }
  checkSavingsAccountStatus()
  {
    this.userAccountService.checkSavingsAccountStatus().subscribe(res=>{
      this.isSavings=res;
      console.log(res);
      if(res==true)
         {
            this.statusMessage="Check Book has been issued";
         }
         else{
          this.statusMessage="Check Book has not been issued yet";
         }
  })
  }

  requestChequeBook()
  {
    console.log(this.accountTypeForm.value.account);
    this.userAccountService.requestChequeBook(this.accountTypeForm.value.account).subscribe(res=>{
      console.log(res);
      if(res==0)
      {
        this.statusMessage1="Request Already Made";
      }
      else{
        if(res==1)
        {
          this.statusMessage1="Request sent successfully";
        }
      }
    })
  }

}
