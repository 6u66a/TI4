import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component, computed, effect, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../appstate/settings.service';
import { DATA, System } from '../data/data';
import { Edition } from '../data/edition.enum';
import { Anomaly, PlanetTrait, SystemType, TechSpecialty, Wormwhole } from '../data/tiles.enum';

interface GeneratedSlice {
  blue: System[];
  red: System[];
}

interface SliceSummary {
  resources: number;
  influence: number;
  bioticSpecialties: number;
  warfareSpecialties: number;
  propulsionSpecialties: number;
  cyberneticSpecialties: number;
}

@Component({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  selector: 'app-slice-generator.component',
  styleUrl: './slice-generator.component.css',
  templateUrl: './slice-generator.component.html',
})
export class SliceGeneratorComponent {

  private readonly settingsService = inject(SettingsService);
  readonly PlanetTrait = PlanetTrait;
  readonly TechSpecialty = TechSpecialty;

  public readonly maxPlayerCount = computed(() => {
    const editions = this.settingsService.settings().editions;
    return editions.includes(Edition.PoK) || editions.includes(Edition.TE) ? 8 : 6;
  });

  public blueSystems = computed(() => DATA.systems
    .filter(system => this.settingsService.settings().editions.includes(system.edition) && system.type === SystemType.Blue));
  public redSystems = computed(() => DATA.systems
    .filter(system => this.settingsService.settings().editions.includes(system.edition) && system.type === SystemType.Red));

  public readonly form = new FormGroup({
    playerCount: new FormControl(4, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(4), Validators.max(6)]
    })
  });

  public generatedSlices: GeneratedSlice[] = [];

  readonly anomalyNames: Record<number, string> = {
    [Anomaly.NEBULA]: 'Nebula',
    [Anomaly.GRAVITY_RIFT]: 'Gravity Rift',
    [Anomaly.ASTEROID_FIELD]: 'Asteroid Field',
    [Anomaly.SUPERNOVA]: 'Supernova',
    [Anomaly.ENTROPIC_SCAR]: 'Entropic Scar'
  };

  readonly wormholeNames: Record<number, string> = {
    [Wormwhole.ALPHA]: 'α',
    [Wormwhole.BETA]: 'β',
    [Wormwhole.GAMMA]: 'γ',
    [Wormwhole.DELTA]: 'δ'
  };

  readonly traitNames: Record<number, string> = {
    [PlanetTrait.HAZARDOUS]: 'Hazardous',
    [PlanetTrait.INDUSTRIAL]: 'Industrial',
    [PlanetTrait.CULTURAL]: 'Cultural'
  };

  readonly traitIcons: Record<number, string> = {
    [PlanetTrait.HAZARDOUS]: 'Hazardous.png',
    [PlanetTrait.INDUSTRIAL]: 'Industrial.png',
    [PlanetTrait.CULTURAL]: 'Cultural.png'
  };

  readonly specialtyNames: Record<number, string> = {
    [TechSpecialty.BIOTIC]: 'Biotic',
    [TechSpecialty.WARFARE]: 'Warfare',
    [TechSpecialty.PROPULSION]: 'Propulsion',
    [TechSpecialty.CYBERNETIC]: 'Cybernetic'
  };

  readonly specialtyIcons: Record<number, string> = {
    [TechSpecialty.BIOTIC]: 'Biotic dark.png',
    [TechSpecialty.WARFARE]: 'Warfare dark.png',
    [TechSpecialty.PROPULSION]: 'Propulsion dark.png',
    [TechSpecialty.CYBERNETIC]: 'Cybernetic dark.png'
  };

  readonly generalIconPath = 'assets/generalIcons/';

  constructor() {
    effect(() => {
      const maxPlayerCount = this.maxPlayerCount();
      const playerCount = this.form.controls.playerCount;

      playerCount.setValidators([
        Validators.required,
        Validators.min(4),
        Validators.max(maxPlayerCount)
      ]);

      if (playerCount.value > maxPlayerCount) {
        playerCount.setValue(maxPlayerCount);
      }

      playerCount.updateValueAndValidity({ emitEvent: false });
    });
  }

  generateSlices(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const playerCount = this.form.controls.playerCount.value;
    const blueSystems = this.shuffleFisherYates([...this.blueSystems()]);
    const redSystems = this.shuffleFisherYates([...this.redSystems()]);

    this.generatedSlices = Array.from({ length: playerCount }, () => ({
      blue: blueSystems.splice(0, 3),
      red: redSystems.splice(0, 2)
    })).sort((left, right) => {
      const leftSummary = this.sliceSummary(left);
      const rightSummary = this.sliceSummary(right);

      return rightSummary.resources - leftSummary.resources
        || rightSummary.influence - leftSummary.influence;
    });
  }

  sliceSummary(slice: GeneratedSlice): SliceSummary {
    const planets = [...slice.blue].flatMap(system => system.planets ?? []);

    return {
      resources: planets.reduce((total, planet) => total + Number(planet.resources), 0),
      influence: planets.reduce((total, planet) => total + Number(planet.influence), 0),
      bioticSpecialties: this.countSpecialties(planets, TechSpecialty.BIOTIC),
      warfareSpecialties: this.countSpecialties(planets, TechSpecialty.WARFARE),
      propulsionSpecialties: this.countSpecialties(planets, TechSpecialty.PROPULSION),
      cyberneticSpecialties: this.countSpecialties(planets, TechSpecialty.CYBERNETIC)
    };
  }

  private countSpecialties(planets: NonNullable<System['planets']>, specialty: TechSpecialty): number {
    return planets.reduce((total, planet) => total + (planet.techSpecialty?.includes(specialty) ? 1 : 0), 0);
  }

  shuffleFisherYates<T>(array: T[]): T[] {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }
}
