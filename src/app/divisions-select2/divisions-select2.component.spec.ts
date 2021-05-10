import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsSelect2Component } from './divisions-select2.component';

describe('DivisionsSelect2Component', () => {
  let component: DivisionsSelect2Component;
  let fixture: ComponentFixture<DivisionsSelect2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsSelect2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
