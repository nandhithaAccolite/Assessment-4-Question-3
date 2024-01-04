import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixcardsComponent } from './sixcards.component';

describe('SixcardsComponent', () => {
  let component: SixcardsComponent;
  let fixture: ComponentFixture<SixcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
