import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdsComponent } from './edit-ads.component';

describe('EditAdsComponent', () => {
  let component: EditAdsComponent;
  let fixture: ComponentFixture<EditAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdsComponent]
    });
    fixture = TestBed.createComponent(EditAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
