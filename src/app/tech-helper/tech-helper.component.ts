import { Component, computed, inject, signal } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { SettingsService } from '../appstate/settings.service';
import { DATA, Faction, Tech } from '../data/data';
import { Edition } from '../data/edition.enum';

@Component({
  standalone: false,
  selector: 'app-faction-chooser',
  templateUrl: './tech-helper.component.html',
  styleUrls: ['./tech-helper.component.css']
})
export class TechHelperComponent {

  private readonly settingsService = inject(SettingsService);
  public factions = computed(() => DATA.factions.filter(faction => this.settingsService.settings().editions.includes(faction.edition)));
  public selectedFaction = signal<Faction | undefined>(undefined);
  public tech = signal<Tech[]>([]);

  constructor() { }

  factionClick_hdl(faction: Faction) {
    this.selectedFaction.set(faction);
    if (faction.edition === Edition.PoK) {
      this.tech.set([...DATA.genericTech, ...faction.tech])
    } else if (this.selectedFaction()?.id === 11) {
      this.tech.set([...DATA.genericTech, ...this.factions().flatMap(faction => faction.tech)].filter(t => this.settingsService.settings().editions.includes(t.edition)))
    }
    else {
      this.tech.set([...DATA.genericTech, ...faction.tech].filter(t => this.settingsService.settings().editions.includes(t.edition)))
    }
  }
}
