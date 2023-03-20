import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchDetailsComponent } from './customer-search-details.component';

describe('CustomerSearchDetailsComponent', () => {
  let component: CustomerSearchDetailsComponent;
  let fixture: ComponentFixture<CustomerSearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
