import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech.component';
import { TechColorComponent } from '../tech-color/tech-color.component';
import { RuntimeTech } from '../../data';
import { TechColor } from '../../tech-color.enum';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;
  let tech: RuntimeTech = {
    tech: {
      name: "Test",
      requirements: {
        [TechColor.blue]: 1,
      },
      provides: null
    },
    provided: {
      [TechColor.blue]: 1
    },
    researched: false,
    available: false,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechComponent, TechColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    component.tech = tech;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create be researchable', () => {
    const fixture = TestBed.createComponent(TechComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.tech.available).toBe(true);
    expect(component.tech.researched).toBe(false);
  });
});
