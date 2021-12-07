import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { ChequeComponent } from './cheque/cheque.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  {
     path: '',
    component: AdminComponent,
    children: [
        { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
        {path:'home',component:AdminHomeComponent},
        {path:'cheque',component:ChequeComponent},
        {path:'users',component:UserAccountComponent},
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
