import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BootDemoNavComponent} from './boot-demo-nav.component';

describe('BootDemoNavComponent', () => {
  let component: BootDemoNavComponent;
  let fixture: ComponentFixture<BootDemoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BootDemoNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootDemoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
