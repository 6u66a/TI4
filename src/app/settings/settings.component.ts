import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '../appstate/settings.service';
import { Edition } from '../data/edition.enum';

@Component({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  selector: 'app-settings.component',
  styleUrl: './settings.component.css',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  private readonly settingsService = inject(SettingsService);
  private readonly destroyRef = inject(DestroyRef);

  public readonly settings = this.settingsService.settings;
  public readonly form = new FormGroup({
    base: new FormControl({ value: true, disabled: true }, { nonNullable: true }),
    pok: new FormControl(this.settings().editions.includes(Edition.PoK), { nonNullable: true }),
    te: new FormControl(this.settings().editions.includes(Edition.TE), { nonNullable: true }),
    additionalFactions: new FormControl(this.settings().additionalFactions, { nonNullable: true })
  });

  constructor() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.persistSettings());
  }

  private persistSettings(): void {
    const formValue = this.form.getRawValue();
    const editions: Edition[] = [Edition.Base];

    if (formValue.pok) {
      editions.push(Edition.PoK);
    }
    if (formValue.te) {
      editions.push(Edition.TE);
    }

    this.settingsService.settings.set({
      editions,
      additionalFactions: Math.max(0, formValue.additionalFactions)
    });
  }
}
