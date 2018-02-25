import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketErrorComponent } from './socket-error.component';

describe('SocketErrorComponent', () => {
  let component: SocketErrorComponent;
  let fixture: ComponentFixture<SocketErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
