import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';
import { Order } from 'src/app/shared/models/order-model';
import { OrderItem } from 'src/app/shared/models/order-item-model';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/shared/models/product-model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Customer } from 'src/app/shared/models/customer-model';
import { CustomerService } from 'src/app/shared/services/customer.service';
@Component({
  selector: 'app-orders-detail-page',
  templateUrl: './orders-detail-page.component.html',
  styleUrls: ['./orders-detail-page.component.scss']
})
export class OrdersDetailPageComponent implements OnInit {
  order: Order = new Order({});
  // numberControl = new FormControl();
  productOptions: Product[] = [];
  customerOptions: Customer[] = [];
  isLoading = true;
  isLoadingButtons = true;
  isEdit = false;

  constructor(
    private _route: ActivatedRoute,
    private _orderService: OrderService,
    private _productService: ProductService,
    private _customerService: CustomerService) { }

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
          this.isLoading = false;
          this.isLoadingButtons = false;
        })
        .catch(error => {
          alert('Erro ao buscar pedido.');
        });
    } else {
      this.order = new Order({});
      this.isLoading = false;
      this.isLoadingButtons = false;
    }
  }

  updateOrderNumber(event) {
    this.order.number = event.currentTarget.value;
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
      return 'N/A';
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
    item.productId = product.id;
  }

  loadProducts(name) {
    this.productOptions = [];
    if (name.length > 0) {
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
          alert('Erro ao buscar produtos.');
        });
    }
  }

  loadCustomers(name) {
    this.customerOptions = [];
    if (name.length > 0) {
      this._customerService.getCustomers(name)
        .then(r => {
          this.customerOptions = [];
          (r as any).forEach(element => {
            this.customerOptions.push(element);
          });
        })
        .catch(error => {
          alert('Erro ao buscar clientes.');
        });
    }
  }

  quantityChange(event, item: OrderItem) {
    item.quantity = event.currentTarget.value;
  }

  saveOrder() {
    this.isLoadingButtons = true;
    if (this.isEdit) {
      this._orderService.updateOrder(this.order)
        .then(r => {
          this.isLoadingButtons = false;
          alert('Registro alterado com sucesso.');
        })
        .catch(error => {
          this.isLoadingButtons = false;
          alert('Erro ao buscar pedido.');
        });
    } else {
      this._orderService.addOrder(this.order)
        .then(r => {
          this.isLoadingButtons = false;
          alert('Registro incluído com sucesso.');
        })
        .catch(error => {
          this.isLoadingButtons = false;
          alert('Erro ao buscar pedido.');
        });
    }
  }

  addOrderItem() {
    if (this.order.orderItems) {
      this.order.orderItems.push(new OrderItem({ orderId: this.order.id }));
    } else {
      this.order.orderItems = [new OrderItem({ orderId: this.order.id })];
    }
  }

}
