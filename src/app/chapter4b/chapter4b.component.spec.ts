import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4bComponent } from './chapter4b.component';

describe('Chapter4bComponent', () => {
  let component: Chapter4bComponent;
  let fixture: ComponentFixture<Chapter4bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter4bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
