import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsersPanelComponent } from './active-users-panel.component';

describe('ActiveUsersPanelComponent', () => {
  let component: ActiveUsersPanelComponent;
  let fixture: ComponentFixture<ActiveUsersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveUsersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUsersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
