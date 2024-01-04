import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRoomComponent } from './add-edit-room.component';

describe('AddEditRoomComponent', () => {
  let component: AddEditRoomComponent;
  let fixture: ComponentFixture<AddEditRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditRoomComponent]
    });
    fixture = TestBed.createComponent(AddEditRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
