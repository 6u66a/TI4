import { Component, Input, OnInit } from '@angular/core';
import { Edition } from 'src/app/data/edition.enum';
import { Race, RuntimeTech, State, Tech, TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css']
})
export class TechPickerComponent implements OnInit {
  public state: State = {
    race: { tech: [], id: 0, name: "", startingtech: [], edition: Edition.Base },
    tech: []
  };
  public provided: TechColors =  {
    [TechColor.blue]: 0,
    [TechColor.red]: 0,
    [TechColor.green]: 0,
    [TechColor.yellow]: 0,
    [TechColor.black]: 0
  };

  public colorEnum = TechColor;
  public Arr = Array;
  private filter: Edition[] = [Edition.Base];
  @Input() faction: Race = { tech: [], id: 0, name: "", startingtech: [], edition: Edition.Base };
  @Input() tech: Tech[] = [];

  constructor() {}

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
    let startingTech:boolean;
    this.state.race=this.faction;
    this.state.tech= this.tech.map(item => {
      startingTech = (this.faction.startingtech.indexOf(item.id) !== -1);
          if (startingTech) {
            this.provided[item.provides]++;
          }
      return { tech: item, researched: startingTech, provided: this.provided, available: false, researchDistance: 0 };
    });
    this.state.tech.map(item => this.updateRequirements(item));
    this.state.tech.sort(this.distanceSorter);
    console.log(this.state);
  }

  updateRequirements(tech: RuntimeTech): void {
    tech.available = this.checkForMatchingRequirements(tech, this.provided);
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
    tech.researched = !tech.researched;
    if (tech.tech.provides !== undefined) {
      (tech.researched) ? tech.provided[tech.tech.provides]++ : tech.provided[tech.tech.provides]--;
    }
    this.state.tech.forEach(item => this.updateRequirements(item));
    this.state.tech.sort(this.distanceSorter);
  }
}
