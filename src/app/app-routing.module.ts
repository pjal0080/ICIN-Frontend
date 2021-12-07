import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CanDeactivateGuardService } from './shared/services/can-deactivate-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'home',component:HomeComponent},
  { path: 'admin',canActivate: [CanDeactivateGuardService], loadChildren: () => import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path: 'user',canActivate: [CanDeactivateGuardService], loadChildren: () => import('./user/user.module').then(mod=>mod.UserModule)},
   
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
