/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerachComponent } from './serach.component';

describe('SerachComponent', () => {
  let component: SerachComponent;
  let fixture: ComponentFixture<SerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
