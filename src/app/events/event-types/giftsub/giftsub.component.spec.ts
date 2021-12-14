import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsubComponent } from './giftsub.component';

describe('GiftsubComponent', () => {
  let component: GiftsubComponent;
  let fixture: ComponentFixture<GiftsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
