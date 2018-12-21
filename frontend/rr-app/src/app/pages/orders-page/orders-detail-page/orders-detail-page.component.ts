import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';
import { Order } from 'src/app/shared/models/order-model';
import { OrderItem } from 'src/app/shared/models/order-item-model';
@Component({
  selector: 'app-orders-detail-page',
  templateUrl: './orders-detail-page.component.html',
  styleUrls: ['./orders-detail-page.component.scss']
})
export class OrdersDetailPageComponent implements OnInit {
  order: Order;
  numberControl = new FormControl();
  isEdit = false;

  constructor(private _route: ActivatedRoute, private _orderService: OrderService) { }

  ngOnInit() {
    const orderNumber = this._route.snapshot.params.number;
    if (orderNumber) {
      this.isEdit = true;
      this._orderService.getOrder(orderNumber)
        .then(r => {
          this.order = new Order(r);
        })
        .catch(error => {
          alert('Erro ao buscar pedido.');
        });
    } else {
      this.order = new Order({});
    }
  }

  saveOrder() {
    if (this.isEdit) {
      this._orderService.updateOrder(this.order)
        .then(r => {
          alert('Registro alterado com sucesso.');
        })
        .catch(error => {
          alert('Erro ao buscar pedido.');
        });
    } else {
      this._orderService.addOrder(this.order)
        .then(r => {
          alert('Registro incluído com sucesso.');
        })
        .catch(error => {
          alert('Erro ao buscar pedido.');
        });
    }
  }

  addOrderItem() {
    if (this.order.orderItems) {
      this.order.orderItems.push(new OrderItem());
    } else {
      this.order.orderItems = [new OrderItem()];
    }
  }

}
