import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  constructor(public httpService: HttpService) {
  }

  getProducts(name: string) {
    return this.httpService.get(`${environment.apiUrl}/api/Product/${name}`).toPromise();
  }
}
