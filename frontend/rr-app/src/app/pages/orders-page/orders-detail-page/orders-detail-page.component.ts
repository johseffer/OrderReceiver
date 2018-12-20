import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';
import { Order } from 'src/app/shared/models/order-model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders-detail-page',
  templateUrl: './orders-detail-page.component.html',
  styleUrls: ['./orders-detail-page.component.scss']
})
export class OrdersDetailPageComponent implements OnInit {
  order: any;
  numberControl = new FormControl();

  constructor(private _route: ActivatedRoute, private _orderService: OrderService) { }

  ngOnInit() {
    const orderNumber = this._route.snapshot.params.number;
    this._orderService.getOrder(orderNumber)
      .then(r => {
        this.order = r;
      })
      .catch(error => {
        alert('Erro ao buscar pedido.');
      });
  }

}
