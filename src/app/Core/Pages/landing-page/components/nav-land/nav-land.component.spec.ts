import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLandComponent } from './nav-land.component';

describe('NavLandComponent', () => {
  let component: NavLandComponent;
  let fixture: ComponentFixture<NavLandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLandComponent]
    });
    fixture = TestBed.createComponent(NavLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
