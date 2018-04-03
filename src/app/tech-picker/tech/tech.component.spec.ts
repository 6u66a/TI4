import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech.component';
import { TechColorComponent } from '../tech-color/tech-color.component';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechComponent, TechColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    component.tech = {
      tech: {
        name: "test",
        requirements: {
        },
        provides: null
      },
      provided: {

      },
      researched: false,
      available: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
