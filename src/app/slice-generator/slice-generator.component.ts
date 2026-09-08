import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../appstate/settings.service';
import { DATA, Faction, Player } from '../data/data';
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

  public blueSystems = computed(() => DATA.systems
    .filter(system => this.settingsService.settings().editions.includes(system.edition) && system.type === SystemType.Blue));
  public redSystems = computed(() => DATA.systems
    .filter(system => this.settingsService.settings().editions.includes(system.edition) && system.type === SystemType.Red));

  public readonly form = new FormGroup({
    playerCount: new FormControl(6, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(3), Validators.max(8)]
    })
  });
}
