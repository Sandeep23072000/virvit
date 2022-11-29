import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage3Component } from './landingpage3.component';

describe('Landingpage3Component', () => {
  let component: Landingpage3Component;
  let fixture: ComponentFixture<Landingpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Landingpage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
