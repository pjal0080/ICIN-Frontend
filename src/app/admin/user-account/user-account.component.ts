import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  config: any;
  users:any;
  p:number=1;
  
  
  constructor( private httpClient:HttpClient,private userService:UserService) { 
    
  }


  ngOnInit(): void {
    this.callGetUser();
    console.log(Math.floor(Math.random() * 899999 + 1000000000000000))
  }
  pageChanged(event: any){
    this.config.currentPage = event;
  }
  changeAction(user:any)
  {
    console.log("changeAction");
      this.userService.changeAuthenticatiopn(user.username,user.enabled).subscribe(res=>{
        console.log(res);
        //this.ngOnInit();
        this.callGetUser();
      })
  }
  callGetUser()
  {
    console.log("user Account");
      this.userService.getAllUsers().subscribe(res=>{
        console.log(res);
        this.users=res;

      })
  }
  createPrimaryAccount(user:any){
     console.log(user);
     this.userService.createUserPrimaryAccount(user).subscribe(res=>{
       console.log(res);
       this.callGetUser();
     })
  }
  createSavingsAccount(user:any){
    console.log(user);
    this.userService.createUserSavingAccount(user).subscribe(res=>{
      console.log(res);
      this.callGetUser();
    })
 }
  

}
