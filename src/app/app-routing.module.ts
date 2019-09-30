import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BanksComponent } from './banks/banks.component';
import { BankDetailsComponent} from './banks/bank-details/bank-details.component'
import { BankEditComponent } from './banks/bank-edit/bank-edit.component';
import { AuthGurad } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.srvice';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'banks'
    // , canActivate: [AuthGurad]
    , canActivateChild: [AuthGurad]
    , component: BanksComponent , children: [
    { path: ':code', component: BankDetailsComponent},
    { path: ':code/edit', component: BankEditComponent, canDeactivate: [CanDeactivateGuard]},
    // { path: 'new', component: BankEditComponent},
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message : 'Page not found'}},
  {path: '**', redirectTo: '/not-found'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
