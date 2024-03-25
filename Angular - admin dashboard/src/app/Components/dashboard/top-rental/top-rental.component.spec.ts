import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRentalComponent } from './top-rental.component';

describe('TopRentalComponent', () => {
  let component: TopRentalComponent;
  let fixture: ComponentFixture<TopRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
