import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitsCoverageComponent } from './limits-coverage.component';

describe('LimitsCoverageComponent', () => {
  let component: LimitsCoverageComponent;
  let fixture: ComponentFixture<LimitsCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitsCoverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitsCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
