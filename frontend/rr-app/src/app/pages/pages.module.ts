import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {
  MatAutocompleteModule, MatFormFieldModule, MatSlideToggleModule,
  MatProgressSpinnerModule, MatInputModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from '../shared/services/order.service';

@NgModule({
  declarations: [HomePageComponent, OrdersPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [OrderService]
})
export class PagesModule { }
