import { Component, input, OnInit, signal } from '@angular/core';
import { Race, RuntimeTech, State, Tech, TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  standalone: false,
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css']
})
export class TechPickerComponent implements OnInit {
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
  faction = input<Race>();
  tech = input<Tech[]>([]);

  constructor() { }

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
    this.state.set({ race: this.faction(), tech: runtimeTech });
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
