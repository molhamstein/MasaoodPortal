import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCenterProductComponent } from './add-center-product.component';

describe('AddCenterProductComponent', () => {
  let component: AddCenterProductComponent;
  let fixture: ComponentFixture<AddCenterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCenterProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCenterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
