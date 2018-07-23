import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RaceChooserComponent } from '../race-chooser/race-chooser.component';
import { TechColorComponent } from './tech-color/tech-color.component';
import { TechPickerComponent } from './tech-picker.component';
import { TechComponent } from './tech/tech.component';
import { RuntimeTech, Tech, TechColors } from '../data';
import { TechColor } from '../tech-color.enum';


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

  it('should sort researched to top', () => {
    const requirements: TechColors = { [TechColor.blue]: 2 };
    const tech: Tech = { id: 1, name: 'Tech', requirements: requirements, provides: TechColor.blue, description: '' };
    const itemA: RuntimeTech = { tech: tech, provided: {}, researched: false, available: true, researchDistance: 1 };
    const itemB: RuntimeTech = { tech: tech, provided: {}, researched: true, available: false, researchDistance: 2 };
    expect(component.distanceSorter(itemA, itemB)).toEqual(1);
  });
});
