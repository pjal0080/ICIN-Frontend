import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path:'',component:UserComponent,
   children:[
    { path: '', redirectTo: '/user/home', pathMatch: 'full' },
     {path:'home',component:UserHomeComponent},
     {path:'transfer',component:TransferComponent},
     {path:'request',component:RequestComponent},
     {path:'deposit',component:DepositComponent},
     {path:'withdraw',component:WithdrawComponent},
     {path:'profile',component:ProfileComponent},
     {path:'transaction',component:TransactionComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
   
    
}
