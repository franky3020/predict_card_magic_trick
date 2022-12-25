import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicPageComponent } from './magic-page.component';

describe('MagicPageComponent', () => {
  let component: MagicPageComponent;
  let fixture: ComponentFixture<MagicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
