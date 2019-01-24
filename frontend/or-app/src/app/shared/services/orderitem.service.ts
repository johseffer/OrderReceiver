import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order-model';
import { OrderItem } from '../models/order-item-model';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderItemService {
  data: any;

  constructor(public httpService: HttpService) {
  }

  getRentability(item: OrderItem) {
    return this.httpService.post(`${environment.apiUrl}/api/OrderItem`, item).toPromise();
  }
}
