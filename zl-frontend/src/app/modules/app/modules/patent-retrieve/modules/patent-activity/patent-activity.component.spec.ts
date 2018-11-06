import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentActivityComponent } from './patent-activity.component';

describe('PatentActivityComponent', () => {
  let component: PatentActivityComponent;
  let fixture: ComponentFixture<PatentActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
