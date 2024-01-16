import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPickedComponent } from './most-picked.component';

describe('MostPickedComponent', () => {
  let component: MostPickedComponent;
  let fixture: ComponentFixture<MostPickedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPickedComponent]
    });
    fixture = TestBed.createComponent(MostPickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
