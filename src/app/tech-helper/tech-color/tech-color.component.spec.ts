import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechColorComponent } from './tech-color.component';

describe('TechColorComponent', () => {
  let component: TechColorComponent;
  let fixture: ComponentFixture<TechColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechColorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TechColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
