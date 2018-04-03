import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechColorComponent } from './tech-color.component';
import { TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';

describe('TechColorComponent', () => {
  let component: TechColorComponent;
  let fixture: ComponentFixture<TechColorComponent>;
  let techColors: TechColors = {
    [TechColor.blue]: 1
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechColorComponent);
    component = fixture.componentInstance;
    component.techColors=techColors;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render blue', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.is-link').textContent).toContain('1');
  }));
});
