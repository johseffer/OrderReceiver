import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order-model';
import { OrderService } from 'src/app/shared/services/order.service';
import { MatTableDataSource, MatAutocompleteSelectedEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  constructor(private _orderService: OrderService, private _router: Router) {

  }
  numberControl = new FormControl();

  filteredOptions: Order[] = [];

  ngOnInit() {
  }

  addOrder() {
    this._router.navigate([`/order/`]);
  }

  detailOrder(order) {
    this._router.navigate([`/order/${order.id}`]);
  }

  loadOrders(number) {
    this.filteredOptions = [];
    const result = new MatTableDataSource<Order>();
    const elementsArray = [];
    this._orderService.getOrders(number)
      .then(r => {
        (r as any).forEach(element => {
          this.filteredOptions.push(element);
        });
      })
      .catch(error => {
        alert('Erro ao buscar pedidos.');
      });
  }
}
