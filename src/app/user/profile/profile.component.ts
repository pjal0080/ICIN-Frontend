import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  email:string="";
username:string|null="";
firstName:string|null="";
lastName:string|null="";
phoneNo:string|null="";

  ngOnInit(): void {
   this.getUserProfile();
  }
  getUserProfile()
  {
    this.email=localStorage.getItem('email')+""
      this.userService.getUserProfile(this.email).subscribe(res=>{
        console.log(res);
        this.username=res.username;
        this.firstName=res.firstName;
        this.lastName=res.lastName;
        this.phoneNo=res.phoneNo;
        
        

      })

  }

}
