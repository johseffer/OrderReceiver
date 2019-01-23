import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomerService {

  constructor(public httpService: HttpService) {
  }

  getCustomers(name: string) {
    return this.httpService.get(`${environment.apiUrl}/api/Customer/${name}`).toPromise();
  }
}
