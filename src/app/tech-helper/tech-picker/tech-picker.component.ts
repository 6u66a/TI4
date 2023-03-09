import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { Edition } from 'src/app/data/edition.enum';
import { DATA, Race, RuntimeTech, State, Tech, TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css']
})
export class TechPickerComponent implements OnInit {
  public state: State;
  public provided: TechColors;

  public colorEnum = TechColor;
  public Arr = Array;
  private filter: Edition[] = [Edition.Base];
  @Input() faction?: Race;
  @Input() tech: Tech[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public cdRef: ChangeDetectorRef) {
    const id = +this.route.snapshot.params['raceid'];
    const race: Race | undefined = DATA.races.find(item => item.id === id);
    this.provided = {
      [TechColor.blue]: 0,
      [TechColor.red]: 0,
      [TechColor.green]: 0,
      [TechColor.yellow]: 0,
      [TechColor.black]: 0
    };
    let startingTech: boolean;
    if (race === undefined) {
      this.state = {
        race: { tech: [], id: 0, name: "", startingtech: [], edition: Edition.Base },
        tech: []
      };
      router.navigate(['']);
    } else {
      this.state = {
        race: race,
        tech: race.tech.map(item => {
          return { tech: item, researched: false, provided: this.provided, available: false, researchDistance: 0, edition: item.edition };
        }).concat(DATA.genericTech.map(item => {
          startingTech = (race.startingtech.indexOf(item.id) !== -1);
          if (startingTech) {
            this.provided[item.provides]++;
          }
          return { tech: item, researched: startingTech, provided: this.provided, available: startingTech, researchDistance: 0, edition: item.edition };
        }))
      };
      this.state.tech.map(item => this.updateRequirements(item));
      this.state.tech.sort(this.distanceSorter);
    }
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
