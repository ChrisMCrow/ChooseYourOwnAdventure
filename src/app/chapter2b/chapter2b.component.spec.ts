import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2bComponent } from './chapter2b.component';

describe('Chapter2bComponent', () => {
  let component: Chapter2bComponent;
  let fixture: ComponentFixture<Chapter2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
