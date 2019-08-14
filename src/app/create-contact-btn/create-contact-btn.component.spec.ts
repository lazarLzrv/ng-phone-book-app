import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactBtnComponent } from './create-contact-btn.component';

describe('CreateContactBtnComponent', () => {
  let component: CreateContactBtnComponent;
  let fixture: ComponentFixture<CreateContactBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContactBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
