import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';
import { Order } from 'src/app/shared/models/order-model';
import { OrderItem } from 'src/app/shared/models/order-item-model';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/shared/models/product-model';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-orders-detail-page',
  templateUrl: './orders-detail-page.component.html',
  styleUrls: ['./orders-detail-page.component.scss']
})
export class OrdersDetailPageComponent implements OnInit {
  order: Order = new Order({});
  numberControl = new FormControl();
  productOptions: Product[] = [];

  isEdit = false;

  constructor(private _route: ActivatedRoute, private _orderService: OrderService, private _productService: ProductService) { }

  ngOnInit() {
    const orderNumber = this._route.snapshot.params.number;
    if (orderNumber) {
      this.isEdit = true;
      this._orderService.getOrder(orderNumber)
        .then(r => {
          this.order = new Order(r);
          this.order.orderItems.forEach(item => {
            item.rentability = this.getItemRentability(item);
          });
        })
        .catch(error => {
          alert('Erro ao buscar pedido.');
        });
    } else {
      this.order = new Order({});
    }
  }

  updateItemRentability(event, item: OrderItem) {
    if (!item.unitPrice || item.unitPrice.toString() !== event.currentTarget.value.replace('R$', '')) {
      item.unitPrice = event.currentTarget.value;
      item.rentability = this.getItemRentability(item);
    }
  }

  mouseOverQuantity(quantity) {
    quantity.focus();
  }

  getItemRentability(item: OrderItem): number {
    if (!item.product) {
      return 0;
    }
    if (item.unitPrice > item.product.unitPrice) {
      return 3;
    } else if (item.unitPrice <= item.product.unitPrice && item.unitPrice >= item.product.unitPrice - item.product.unitPrice * 0.1) {
      return 2;
    } else { return 1; }
  }

  onRentabilityFocus(event) {
    event.currentTarget.blur();
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value === 1) {
      return 'Ruim';
    } else if (value === 2) {
      return 'Bom';
    } else {
      return 'Ótimo';
    }


    return value;
  }

  productChange(item: OrderItem, product) {
    item.product = product;
  }

  loadProducts(name) {
    this.productOptions = [];
    const result = new MatTableDataSource<Product>();
    const elementsArray = [];
    this._productService.getProducts(name)
      .then(r => {
        this.productOptions = [];
        (r as any).forEach(element => {
          this.productOptions.push(element);
        });
      })
      .catch(error => {
        alert('Erro ao buscar pedidos.');
      });
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
