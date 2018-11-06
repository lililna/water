import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentManagementComponent } from './patent-management.component';

describe('PatentManagementComponent', () => {
  let component: PatentManagementComponent;
  let fixture: ComponentFixture<PatentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
