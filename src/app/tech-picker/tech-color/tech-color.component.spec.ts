import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechColorComponent } from './tech-color.component';
import { TechColors } from '../../data';

describe('TechColorComponent', () => {
  let component: TechColorComponent;
  let fixture: ComponentFixture<TechColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechColorComponent);
    component = fixture.componentInstance;
    component.techColors={};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
