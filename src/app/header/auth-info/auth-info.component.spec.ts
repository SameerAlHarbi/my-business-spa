import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInfoComponent } from './auth-info.component';

describe('AuthInfoComponent', () => {
  let component: AuthInfoComponent;
  let fixture: ComponentFixture<AuthInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
