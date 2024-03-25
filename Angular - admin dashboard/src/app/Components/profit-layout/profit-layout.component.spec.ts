import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLayoutComponent } from './profit-layout.component';

describe('ProfitLayoutComponent', () => {
  let component: ProfitLayoutComponent;
  let fixture: ComponentFixture<ProfitLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
