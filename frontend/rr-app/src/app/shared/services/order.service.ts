import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class OrderService {
  data: any;

  constructor(public httpService: HttpService) {
  }

  getOrder(number: string) {
    return this.httpService.get(`http://localhost:56093/api/Order/${number}`).toPromise();
  }
}
