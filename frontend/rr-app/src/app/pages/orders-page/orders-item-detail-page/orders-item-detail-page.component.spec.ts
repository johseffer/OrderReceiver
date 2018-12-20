import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDetailPageComponent } from './orders-item-detail-page.component';

describe('OrdersItemDetailPageComponent', () => {
  let component: OrdersItemDetailPageComponent;
  let fixture: ComponentFixture<OrdersItemDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
