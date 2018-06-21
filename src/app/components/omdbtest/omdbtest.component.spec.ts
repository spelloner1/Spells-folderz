import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbtestComponent } from './omdbtest.component';

describe('OmdbtestComponent', () => {
  let component: OmdbtestComponent;
  let fixture: ComponentFixture<OmdbtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdbtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
