import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech.component';
import { TechColorComponent } from '../tech-color/tech-color.component';
import { RuntimeTech } from '../../data';
import { TechColor } from '../../tech-color.enum';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;
  const tech: RuntimeTech = {
    tech: {
      id: 1,
      name: 'Test',
      requirements: {
        [TechColor.blue]: 1,
      },
      provides: null,
      description: ''
    },
    provided: {
      [TechColor.blue]: 1
    },
    researched: false,
    available: false,
    researchDistance: 1
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
    fixture = TestBed.createComponent(TechComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.tech.available).toBe(false);
    expect(component.tech.researched).toBe(false);
  });
});
