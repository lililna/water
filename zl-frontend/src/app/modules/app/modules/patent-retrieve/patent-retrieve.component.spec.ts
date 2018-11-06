import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentRetrieveComponent } from './patent-retrieve.component';

describe('PatentRetrieveComponent', () => {
  let component: PatentRetrieveComponent;
  let fixture: ComponentFixture<PatentRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
