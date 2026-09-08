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
import { SystemType } from '../data/system.enum';

interface GeneratedSlice {
  blue: System[];
  red: System[];
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

  public readonly maxPlayerCount = computed(() => {
    const editions = this.settingsService.settings().editions;
    return editions.includes(Edition.PoK) ? 8 : 6;
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
    }));
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
