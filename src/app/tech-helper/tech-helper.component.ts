import { Component, computed, inject, signal } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { SettingsService } from '../appstate/settings.service';
import { DATA, Race, Tech } from '../data/data';
import { Edition } from '../data/edition.enum';

@Component({
  standalone: false,
  selector: 'app-race-chooser',
  templateUrl: './tech-helper.component.html',
  styleUrls: ['./tech-helper.component.css']
})
export class TechHelperComponent {

  private readonly settingsService = inject(SettingsService);
  public races = computed(() => DATA.races.filter(race => this.settingsService.settings().editions.includes(race.edition)));
  public selectedFaction = signal<Race | undefined>(undefined);
  public tech = signal<Tech[]>([]);

  constructor() { }

  raceClick_hdl(race: Race) {
    this.selectedFaction.set(race);
    if (race.edition === Edition.PoK) {
      this.tech.set([...DATA.genericTech, ...race.tech])
    } else if (this.selectedFaction()?.id === 11) {
      this.tech.set([...DATA.genericTech, ...this.races().flatMap(r => r.tech)].filter(t => this.settingsService.settings().editions.includes(t.edition)))
    }
    else {
      this.tech.set([...DATA.genericTech, ...race.tech].filter(t => this.settingsService.settings().editions.includes(t.edition)))
    }
  }
}
