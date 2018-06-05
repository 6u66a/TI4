import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechColorComponent } from './tech-color.component';
import { TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';

describe('TechColorComponent', () => {
  let component: TechColorComponent;
  let fixture: ComponentFixture<TechColorComponent>;
  const techColors: TechColors = {
    [TechColor.blue]: 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechColorComponent);
    component = fixture.componentInstance;
    component.techColors = techColors;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render blue', async(() => {
    const compiled: HTMLDivElement = fixture.debugElement.nativeElement;
    const root: HTMLDivElement = compiled.querySelector('div.level-item div');
    expect(root.children.length).toBe(2);
    expect((<HTMLSpanElement> root.children[0]).className).toBe('icon has-text-link');
  }));
});
