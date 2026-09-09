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
  private readonly factionIconNames: Record<number, string> = {
    1: 'Arborec.png',
    2: 'Letnev.png',
    3: 'Saar.png',
    4: 'Muaat.png',
    5: 'Hacan.png',
    6: 'Sol.png',
    7: 'Creuss.png',
    8: 'L1Z1X.png',
    9: 'Mentak.png',
    10: 'Naalu.png',
    11: 'Nekro.png',
    12: 'Sardakk.png',
    13: 'Jol Nar.png',
    14: 'Winnu.png',
    15: 'Xxcha.png',
    16: 'Yin.png',
    17: 'Yssaril.png',
    18: 'Argent.png',
    19: 'Empyrean.png',
    20: 'Mahact.png',
    21: 'Naaz-Rokha.png',
    22: 'Nomad.png',
    23: 'Titans.png',
    24: "Vuil'Raith.png"
  };
  public factions = computed(() => DATA.factions.filter(faction => this.settingsService.settings().editions.includes(faction.edition)));
  public selectedFaction = signal<Faction | undefined>(undefined);
  public tech = signal<Tech[]>([]);

  constructor() { }

  factionIcon(faction: Faction): string {
    return `assets/factions/${this.factionIconNames[Number(faction.id)]}`;
  }

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
