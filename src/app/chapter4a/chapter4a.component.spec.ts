import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4aComponent } from './chapter4a.component';

describe('Chapter4aComponent', () => {
  let component: Chapter4aComponent;
  let fixture: ComponentFixture<Chapter4aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
