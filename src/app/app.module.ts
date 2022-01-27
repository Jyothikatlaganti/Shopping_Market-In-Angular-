import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { SignupPageComponent } from './Component/signup-page/signup-page.component';
import { EmployeeDashBoardComponent } from './Component/employee-dash-board/employee-dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Component/header/header.component';
import { CartComponent } from './Component/cart/cart.component';
import { ProductsComponent } from './Component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    EmployeeDashBoardComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
