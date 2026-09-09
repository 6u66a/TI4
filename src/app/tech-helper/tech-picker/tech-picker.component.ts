import { Component, input, OnInit, signal } from '@angular/core';
import { Faction, RuntimeTech, State, Tech, TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  standalone: false,
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css']
})
export class TechPickerComponent implements OnInit {
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

  public state = signal<State | undefined>(undefined);
  public provided = signal<TechColors>({
    [TechColor.blue]: 0,
    [TechColor.red]: 0,
    [TechColor.green]: 0,
    [TechColor.yellow]: 0,
    [TechColor.black]: 0
  });

  public colorEnum = TechColor;
  public Arr = Array;
  faction = input<Faction>();
  tech = input<Tech[]>([]);

  constructor() { }

  factionIcon(faction: Faction | undefined): string | undefined {
    const iconName = faction ? this.factionIconNames[Number(faction.id)] : undefined;
    return iconName ? `assets/factions/${iconName}` : undefined;
  }

  distanceSorter(itemA: RuntimeTech, itemB: RuntimeTech): number {
    if (itemA.researched && !itemB.researched) {
      return -1;
    } else if (!itemA.researched && itemB.researched) {
      return 1;
    }
    if (itemA.available && !itemB.available) {
      return -1;
    } else if (!itemA.available && itemB.available) {
      return 1;
    }
    if (itemA.tech.name < itemB.tech.name && itemA.researchDistance === itemB.researchDistance) {
      return -1;
    } else if (itemA.tech.name > itemB.tech.name && itemA.researchDistance === itemB.researchDistance) {
      return 1;
    }
    return itemA.researchDistance - itemB.researchDistance;
  }

  ngOnInit() {
    const provided = { ...this.provided() };
    const runtimeTech = this.tech().map(item => {
      const startingTech = this.faction()?.startingtech.indexOf(item.id) !== -1;
      if (startingTech) {
        provided[item.provides]++;
      }
      return { tech: item, researched: startingTech, provided, available: false, researchDistance: 0 };
    });
    this.provided.set(provided);
    this.state.set({ faction: this.faction(), tech: runtimeTech });
    this.state.update(state => state ? { ...state, tech: state.tech.map(item => { this.updateRequirements(item); return item; }).sort(this.distanceSorter) } : state);
  }

  updateRequirements(tech: RuntimeTech): void {
    tech.available = this.checkForMatchingRequirements(tech, this.provided());
  }

  checkForMatchingRequirements(tech: RuntimeTech, provided: TechColors): boolean {
    let techDistance = 0;
    for (const color in tech.tech.requirements) {
      if (tech.provided[color] < tech.tech.requirements[color]) {
        techDistance += tech.tech.requirements[color] - tech.provided[color];
      }
    }
    tech.researchDistance = techDistance;
    return (techDistance === 0);
  }

  onResearched(tech: RuntimeTech) {
    const nextProvided = { ...this.provided() };
    tech.researched = !tech.researched;
    if (tech.tech.provides !== undefined) {
      (tech.researched) ? nextProvided[tech.tech.provides]++ : nextProvided[tech.tech.provides]--;
    }
    this.provided.set(nextProvided);
    this.state.update(state => state ? { ...state, tech: state.tech.map(item => ({ ...item, provided: nextProvided })).map(item => { this.updateRequirements(item); return item; }).sort(this.distanceSorter) } : state);
  }
}
