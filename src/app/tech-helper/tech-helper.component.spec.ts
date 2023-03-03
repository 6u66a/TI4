import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHelperComponent } from './tech-helper.component';

describe('TechHelperComponent', () => {
  let component: TechHelperComponent;
  let fixture: ComponentFixture<TechHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
