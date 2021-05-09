import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsSelectComponent } from './divisions-select.component';

describe('DivisionsSelectComponent', () => {
  let component: DivisionsSelectComponent;
  let fixture: ComponentFixture<DivisionsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
