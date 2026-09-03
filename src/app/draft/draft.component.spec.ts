import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftComponent } from './draft.component';

describe('DraftComponent', () => {
  let component: DraftComponent;
  let fixture: ComponentFixture<DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds players through the signal-backed collection', () => {
    const input = document.createElement('input');
    component.playerForm.controls.name.setValue('Alice');

    component.addPlayer(input);

    expect(component.players()).toEqual([{ name: 'Alice' }]);
  });

  it('updates draft choices and progress through signals', () => {
    component.players.set([{ name: 'Alice' }, { name: 'Bob' }]);
    component.draftRaces.set([{ id: 1, name: 'Arborec', tech: [], startingtech: [], edition: 0 } as any]);
    component.positions.set(['Speaker']);
    component.slices.set([true]);

    component.draftRace(0);
    component.draftPosition(0);
    component.draftSlice(0);

    expect(component.players()[0].race?.name).toBe('Arborec');
    expect(component.players()[0].position).toBe('Speaker');
    expect(component.players()[0].slice).toBe(true);
    expect(component.incomplete()).toBe(true);
  });
});
