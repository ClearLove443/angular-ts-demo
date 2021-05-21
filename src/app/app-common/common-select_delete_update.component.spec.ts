import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonSelectDeleteUpdateComponent } from './common-select_delete_update.component';


describe('CommonSelectDeleteUpdateComponent', () => {
  let component: CommonSelectDeleteUpdateComponent;
  let fixture: ComponentFixture<CommonSelectDeleteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonSelectDeleteUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSelectDeleteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
