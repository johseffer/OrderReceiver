import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-detail-page',
  templateUrl: './orders-detail-page.component.html',
  styleUrls: ['./orders-detail-page.component.scss']
})
export class OrdersDetailPageComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    const orderId = this._route.snapshot.params.number;
    alert('orderId:' + orderId);
  }

}
