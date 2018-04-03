import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { TechPickerComponent } from './tech-picker.component';
import { TechColors } from '../data';
import { RaceChooserComponent } from '../race-chooser/race-chooser.component';
import { TechDetailComponent } from '../tech-detail/tech-detail.component';
import { TechColorComponent } from './tech-color/tech-color.component';
import { TechComponent } from './tech/tech.component';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';

describe('TechPickerComponent', () => {
  let component: TechPickerComponent;
  let fixture: ComponentFixture<TechPickerComponent>;
  let router: Router;
  let location: Location;

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
        },
        {
          path: 'detail',
          component: TechDetailComponent,
        }]
      )],
      declarations: [TechPickerComponent, RaceChooserComponent, TechDetailComponent, TechColorComponent, TechComponent],
      //const id = +this.route.snapshot.paramMap.get('raceid');
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
    //router.navigate(['tech/1']);
    //tick(50);
    expect(component).toBeTruthy();
  }));
});
