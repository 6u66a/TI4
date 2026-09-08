import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliceGeneratorComponent } from './slice-generator.component';

describe('SliceGeneratorComponent', () => {
  let component: SliceGeneratorComponent;
  let fixture: ComponentFixture<SliceGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliceGeneratorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SliceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
