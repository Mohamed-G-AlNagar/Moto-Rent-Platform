import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecentTransactionComponent } from './all-recent-transaction.component';

describe('AllRecentTransactionComponent', () => {
  let component: AllRecentTransactionComponent;
  let fixture: ComponentFixture<AllRecentTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRecentTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllRecentTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
