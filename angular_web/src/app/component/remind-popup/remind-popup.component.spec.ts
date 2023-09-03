import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindPopupComponent } from './remind-popup.component';

describe('RemindPopupComponent', () => {
  let component: RemindPopupComponent;
  let fixture: ComponentFixture<RemindPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemindPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemindPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
