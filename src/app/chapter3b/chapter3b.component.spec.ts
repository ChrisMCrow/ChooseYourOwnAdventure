import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3bComponent } from './chapter3b.component';

describe('Chapter3bComponent', () => {
  let component: Chapter3bComponent;
  let fixture: ComponentFixture<Chapter3bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
