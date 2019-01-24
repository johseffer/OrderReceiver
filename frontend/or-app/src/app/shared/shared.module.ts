import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { ErrorHandlerInterceptor } from './services/http/error-handler.interceptor';
import { OrderService } from 'src/app/shared/services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { OrderItemService } from './services/orderitem.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    OrderService,
    OrderItemService,
    ProductService,
    CustomerService,
    ErrorHandlerInterceptor,
  ]
})
export class SharedModule { }
