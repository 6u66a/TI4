import { Injectable, signal } from '@angular/core';
import { Edition } from '../data/edition.enum';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  public settings = signal<Settings>({
    editions: [Edition.Base],
    additionalRaces: 0
  });
}

export interface Settings {
  editions: Array<Edition>;
  additionalRaces: number;
}
