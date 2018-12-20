import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable()
export class OrderService {
  data: any;

  constructor(public httpService: HttpService) {
  }

  getOrder(number: string) {
    return this.httpService.get(`//orderreceiver.eastus2.cloudapp.azure.com/api/Order/${number}`).toPromise();
  }
}
