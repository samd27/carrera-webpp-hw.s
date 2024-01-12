import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegop1ScreenComponent } from './juegop1-screen.component';

describe('Juegop1ScreenComponent', () => {
  let component: Juegop1ScreenComponent;
  let fixture: ComponentFixture<Juegop1ScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Juegop1ScreenComponent]
    });
    fixture = TestBed.createComponent(Juegop1ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
