import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcctComponentComponent } from './create-acct-component.component';

describe('CreateAcctComponentComponent', () => {
  let component: CreateAcctComponentComponent;
  let fixture: ComponentFixture<CreateAcctComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAcctComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcctComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
