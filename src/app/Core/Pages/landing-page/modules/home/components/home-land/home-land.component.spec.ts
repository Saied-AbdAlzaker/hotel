import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandComponent } from './home-land.component';

describe('HomeLandComponent', () => {
  let component: HomeLandComponent;
  let fixture: ComponentFixture<HomeLandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLandComponent]
    });
    fixture = TestBed.createComponent(HomeLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
