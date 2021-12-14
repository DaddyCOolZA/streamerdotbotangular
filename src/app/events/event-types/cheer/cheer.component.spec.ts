import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerComponent } from './cheer.component';

describe('CheerComponent', () => {
  let component: CheerComponent;
  let fixture: ComponentFixture<CheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
