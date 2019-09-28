import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BanksComponent } from './banks/banks.component';
import { BanksListComponent } from './banks/banks-list/banks-list.component';
import { BankItemComponent } from './banks/banks-list/bank-item/bank-item.component';
import { AuthInfoComponent } from './header/auth-info/auth-info.component';
import { BankDetailsComponent } from './banks/bank-details/bank-details.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BankEditComponent } from './banks/bank-edit/bank-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ErrorPageComponent,
    BanksComponent,
    BanksListComponent,
    BankItemComponent,
    AuthInfoComponent,
    BankDetailsComponent,
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    BankEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
