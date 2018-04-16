import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TechPickerComponent } from './tech-picker.component';
import { TechColors } from '../data';
import { RaceChooserComponent } from '../race-chooser/race-chooser.component';
import { TechColorComponent } from './tech-color/tech-color.component';
import { TechComponent } from './tech/tech.component';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';

describe('TechPickerComponent', () => {
  let component: TechPickerComponent;
  let fixture: ComponentFixture<TechPickerComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(
        [{
          path: '',
          component: RaceChooserComponent,
          pathMatch: 'full',
        },
        {
          path: 'tech/:raceid',
          component: TechPickerComponent
        }]
      )],
      declarations: [TechPickerComponent, RaceChooserComponent, TechColorComponent, TechComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: { raceid: '1' }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPickerComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
