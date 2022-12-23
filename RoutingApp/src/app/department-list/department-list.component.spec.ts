import { ComponentFixture, TestBed } from '@angular/core/testing';

import { departmentListComponent } from './department-list.component';

describe('DepartmentListComponent', () => {
  let component: departmentListComponent;
  let fixture: ComponentFixture<departmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ departmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(departmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
