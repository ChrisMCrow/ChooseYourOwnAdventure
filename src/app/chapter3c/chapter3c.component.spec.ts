import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3cComponent } from './chapter3c.component';

describe('Chapter3cComponent', () => {
  let component: Chapter3cComponent;
  let fixture: ComponentFixture<Chapter3cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
