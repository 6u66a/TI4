import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHelperComponent } from './tech-helper.component';

describe('TechHelperComponent', () => {
  let component: TechHelperComponent;
  let fixture: ComponentFixture<TechHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechHelperComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TechHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selects a faction and exposes its filtered technologies', () => {
    const faction = component.factions()[0];

    component.factionClick_hdl(faction);

    expect(component.selectedFaction()).toBe(faction);
    expect(component.tech().length).toBeGreaterThan(0);
    expect(component.tech().every(tech => tech.edition === 0)).toBeTrue();
  });
});
