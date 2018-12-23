import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order-model';

@Injectable()
export class OrderService {
  data: any;

  constructor(public httpService: HttpService) {
  }

  getOrders(number: string) {
    return this.httpService.get(`${environment.apiUrl}/api/Order/${number}`).toPromise();
  }

  getOrder(id: string) {
    return this.httpService.get(`${environment.apiUrl}/api/Order/GetDetail/${id}`).toPromise();
  }

  addOrder(order: Order) {
    return this.httpService.post(`${environment.apiUrl}/api/Order`, order).toPromise();
  }

  updateOrder(order: Order) {
    return this.httpService.put(`${environment.apiUrl}/api/Order/${order.id}`, order).toPromise();
  }
}
