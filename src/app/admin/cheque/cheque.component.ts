import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/shared/services/user-account.service';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.scss']
})
export class ChequeComponent implements OnInit {

  constructor(private userAccountService:UserAccountService) { }
  config: any;
  chequeBooks:any;
  p:number=1;
  isEmpty:boolean=false;
  ngOnInit(): void {
    this.getChequeBook();
  }
  getChequeBook()
  {
    this.userAccountService.getChequeBookRequest().subscribe(res=>{
      console.log(res);
      this.chequeBooks=res;
      if(res.length>0)
       {
        this.isEmpty=false
        console.log("false");
       }
       else{
        this.isEmpty=true;
        console.log("true");
       }
    })
  }
  pageChanged(event: any){
    this.config.currentPage = event;
  }
  confirmChequebookRequest(userId:Number,accountType:string)
  {
     console.log(accountType,userId);
     this.userAccountService.confirmChequeBookRequest(userId,accountType).subscribe(res=>{
       console.log(res);
       this.getChequeBook();
       

     })
  }

}
