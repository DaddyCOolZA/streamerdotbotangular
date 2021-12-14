import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftbombComponent } from './giftbomb.component';

describe('GiftbombComponent', () => {
  let component: GiftbombComponent;
  let fixture: ComponentFixture<GiftbombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftbombComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftbombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
