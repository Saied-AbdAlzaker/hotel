import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdsComponent } from './view-ads.component';

describe('ViewAdsComponent', () => {
  let component: ViewAdsComponent;
  let fixture: ComponentFixture<ViewAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdsComponent]
    });
    fixture = TestBed.createComponent(ViewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
