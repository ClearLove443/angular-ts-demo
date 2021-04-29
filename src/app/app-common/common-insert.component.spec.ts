import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInsertComponent } from './common-insert.component';

describe('UserInsertComponent', () => {
  let component: CommonInsertComponent;
  let fixture: ComponentFixture<CommonInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
