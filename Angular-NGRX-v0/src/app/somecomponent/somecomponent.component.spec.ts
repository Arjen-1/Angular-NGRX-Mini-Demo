import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomecomponentComponent } from './somecomponent.component';

describe('SomecomponentComponent', () => {
  let component: SomecomponentComponent;
  let fixture: ComponentFixture<SomecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
