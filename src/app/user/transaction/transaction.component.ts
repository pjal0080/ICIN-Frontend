import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  config: any;
  
  p:number=1;
  constructor(private userAccountService:UserAccountService) { }
  transactions:any;
  ngOnInit(): void {
    this.getTransactions();
  }
  pageChanged(event: any){
    this.config.currentPage = event;
  }

  getTransactions()
  {
    this.userAccountService.getTransactionsHistory().subscribe(res=>{
      console.log(res);
      this.transactions=res;
    })
  }

}
