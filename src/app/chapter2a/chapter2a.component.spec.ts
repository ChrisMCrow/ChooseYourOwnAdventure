import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2aComponent } from './chapter2a.component';

describe('Chapter2aComponent', () => {
  let component: Chapter2aComponent;
  let fixture: ComponentFixture<Chapter2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
