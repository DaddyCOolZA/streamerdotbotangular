import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidComponent } from './raid.component';

describe('RaidComponent', () => {
  let component: RaidComponent;
  let fixture: ComponentFixture<RaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
