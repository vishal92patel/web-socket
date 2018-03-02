import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSigningComponent } from './auto-signing.component';

describe('AutoSigningComponent', () => {
  let component: AutoSigningComponent;
  let fixture: ComponentFixture<AutoSigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
