import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceChooserComponent } from './race-chooser.component';

describe('RaceChooserComponent', () => {
  let component: RaceChooserComponent;
  let fixture: ComponentFixture<RaceChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
