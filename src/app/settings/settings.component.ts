import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '../appstate/settings.service';
import { Edition } from '../data/edition.enum';

@Component({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  selector: 'app-settings.component',
  styleUrl: './settings.component.css',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  private readonly settingsService = inject(SettingsService);

  public readonly settings = this.settingsService.settings;
  public readonly form = new FormGroup({
    base: new FormControl(this.settings().editions.includes(Edition.Base), { nonNullable: true }),
    pok: new FormControl(this.settings().editions.includes(Edition.PoK), { nonNullable: true }),
    te: new FormControl(this.settings().editions.includes(Edition.TE), { nonNullable: true }),
    additionalRaces: new FormControl(this.settings().additionalRaces, { nonNullable: true })
  });

  public saveSettings(): void {
    const formValue = this.form.getRawValue();
    const editions: Edition[] = [];

    if (formValue.base) {
      editions.push(Edition.Base);
    }
    if (formValue.pok) {
      editions.push(Edition.PoK);
    }
    if (formValue.te) {
      editions.push(Edition.TE);
    }

    this.settingsService.settings.set({
      editions,
      additionalRaces: Math.max(0, formValue.additionalRaces)
    });
  }
}
