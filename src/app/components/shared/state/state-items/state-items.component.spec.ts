import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateItemsComponent } from './state-items.component';

describe('StateItemsComponent', () => {
  let component: StateItemsComponent;
  let fixture: ComponentFixture<StateItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
