import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersVerificationComponent } from './users-verification.component';

describe('UsersVerificationComponent', () => {
  let component: UsersVerificationComponent;
  let fixture: ComponentFixture<UsersVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
