import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRemindersComponent } from './pay-reminders.component';

describe('PayRemindersComponent', () => {
  let component: PayRemindersComponent;
  let fixture: ComponentFixture<PayRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
