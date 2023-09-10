import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBlidingComponent } from './data-bliding.component';

describe('DataBlidingComponent', () => {
  let component: DataBlidingComponent;
  let fixture: ComponentFixture<DataBlidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBlidingComponent]
    });
    fixture = TestBed.createComponent(DataBlidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
