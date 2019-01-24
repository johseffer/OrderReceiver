import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {
  MatAutocompleteModule, MatFormFieldModule, MatSlideToggleModule,
  MatProgressSpinnerModule, MatInputModule, MatCardModule, MatSliderModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from '../shared/services/order.service';
import { OrdersDetailPageComponent } from './orders-page/orders-detail-page/orders-detail-page.component';
import { ProductService } from '../shared/services/product.service';
import { OrderItemService } from '../shared/services/orderitem.service';

@NgModule({
  declarations: [HomePageComponent, OrdersPageComponent, OrdersDetailPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [OrderService, OrderItemService, ProductService]
})
export class PagesModule { }
