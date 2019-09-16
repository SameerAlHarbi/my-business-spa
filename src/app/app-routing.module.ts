import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BanksComponent } from './banks/banks.component';
import { BankDetailsComponent} from './banks/bank-details/bank-details.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'banks', component: BanksComponent , children: [
    { path: '', component: BankDetailsComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message : 'Page not found'}},
  {path: '**', redirectTo: '/not-found'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
