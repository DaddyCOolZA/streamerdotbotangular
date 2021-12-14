import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubComponent } from './resub.component';

describe('ResubComponent', () => {
  let component: ResubComponent;
  let fixture: ComponentFixture<ResubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
