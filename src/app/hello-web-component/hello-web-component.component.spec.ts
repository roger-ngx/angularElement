import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWebComponentComponent } from './hello-web-component.component';

describe('HelloWebComponentComponent', () => {
  let component: HelloWebComponentComponent;
  let fixture: ComponentFixture<HelloWebComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWebComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
