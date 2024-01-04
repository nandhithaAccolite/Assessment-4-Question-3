import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelvecardsComponent } from './twelvecards.component';

describe('TwelvecardsComponent', () => {
  let component: TwelvecardsComponent;
  let fixture: ComponentFixture<TwelvecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwelvecardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelvecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
