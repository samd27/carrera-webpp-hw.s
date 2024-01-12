import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegop2ScreenComponent } from './juegop2-screen.component';

describe('Juegop2ScreenComponent', () => {
  let component: Juegop2ScreenComponent;
  let fixture: ComponentFixture<Juegop2ScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Juegop2ScreenComponent]
    });
    fixture = TestBed.createComponent(Juegop2ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
