import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { ErrorHandlerInterceptor } from './services/http/error-handler.interceptor';
import { OrderService } from 'src/app/shared/services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

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
    ErrorHandlerInterceptor,
  ]
})
export class SharedModule { }
