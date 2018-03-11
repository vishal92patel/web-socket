import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateSessionComponent } from './duplicate-session.component';

describe('DuplicateSessionComponent', () => {
  let component: DuplicateSessionComponent;
  let fixture: ComponentFixture<DuplicateSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
