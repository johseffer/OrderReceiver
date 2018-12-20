import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemPageComponent } from './orders-item-page.component';

describe('OrdersItemPageComponent', () => {
  let component: OrdersItemPageComponent;
  let fixture: ComponentFixture<OrdersItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
