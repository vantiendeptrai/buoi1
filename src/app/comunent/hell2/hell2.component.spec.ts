import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hell2Component } from './hell2.component';

describe('Hell2Component', () => {
  let component: Hell2Component;
  let fixture: ComponentFixture<Hell2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hell2Component]
    });
    fixture = TestBed.createComponent(Hell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
