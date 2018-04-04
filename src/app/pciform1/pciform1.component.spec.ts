import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pciform1Component } from './pciform1.component';

describe('Pciform1Component', () => {
  let component: Pciform1Component;
  let fixture: ComponentFixture<Pciform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pciform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pciform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
