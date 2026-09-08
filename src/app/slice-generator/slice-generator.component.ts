import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component, computed, effect, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../appstate/settings.service';
import { DATA, Faction, Player } from '../data/data';
import { Edition } from '../data/edition.enum';
import { SystemType } from '../data/system.enum';

@Component({
  imports: [
    MatCardModule,
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
}
