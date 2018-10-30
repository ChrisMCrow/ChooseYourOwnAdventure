import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3aComponent } from './chapter3a.component';

describe('Chapter3aComponent', () => {
  let component: Chapter3aComponent;
  let fixture: ComponentFixture<Chapter3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
