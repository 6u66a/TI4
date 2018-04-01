import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDetailComponent } from './tech-detail.component';

describe('TechDetailComponent', () => {
  let component: TechDetailComponent;
  let fixture: ComponentFixture<TechDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
