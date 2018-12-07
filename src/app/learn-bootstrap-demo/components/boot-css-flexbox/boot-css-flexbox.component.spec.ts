import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootCssFlexboxComponent } from './boot-css-flexbox.component';

describe('BootCssFlexboxComponent', () => {
  let component: BootCssFlexboxComponent;
  let fixture: ComponentFixture<BootCssFlexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootCssFlexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootCssFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
