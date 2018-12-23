import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailPageComponent } from './orders-detail-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatSliderModule
} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrdersDetailPageComponent', () => {
  let component: OrdersDetailPageComponent;
  let fixture: ComponentFixture<OrdersDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatSliderModule,
        MatProgressSpinnerModule,
        SharedModule
      ],
      declarations: [OrdersDetailPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
