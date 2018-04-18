import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tech, DATA, Race, State, RuntimeTech, TechColors } from '../data';
import { TechColor } from '../tech-color.enum';
import { TechComponent } from './tech/tech.component';
import { createViewChildren } from '@angular/compiler/src/core';

@Component({
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css', '../../../node_modules/bulma/css/bulma.css']
})
export class TechPickerComponent implements OnInit {
  public state: State;
  public provided: TechColors;

  constructor(private route: ActivatedRoute, private router: Router, public cdRef: ChangeDetectorRef) {
    const id = +this.route.snapshot.params['raceid'];
    const race: Race = DATA.races.find(item => item.id === id);
    if (race === undefined) {
      // TODO do this via Guard
      router.navigate(['']);
    }
    this.provided = {
      [TechColor.blue]: 0,
      [TechColor.red]: 0,
      [TechColor.green]: 0,
      [TechColor.yellow]: 0,
      [TechColor.black]: 0
    };
    let startingTech: boolean;
    this.state = {
      race: race,
      tech: race.tech.map(item => {
        return { tech: item, researched: false, provided: this.provided, available: false, researchDistance: 0 };
      }).concat(DATA.genericTech.map(item => {
        startingTech = (race.startingtech.indexOf(item.id) !== -1);
        if (startingTech) {
          this.provided[item.provides]++;
        }
        return { tech: item, researched: startingTech, provided: this.provided, available: startingTech, researchDistance: 0 };
      }))
    };
    this.state.tech.map(item => this.updateRequirements(item));
    this.state.tech.sort(this.distanceSorter);
  }

  distanceSorter(itemA: RuntimeTech, itemB: RuntimeTech): number {
    if (itemA.researchDistance === itemB.researchDistance) {
      if (itemA.researched && !itemB.researched) {
        return -1;
      } else if (!itemA.researched && itemB.researched) {
        return 1;
      }
      if (itemA.tech.name < itemB.tech.name) {
        return -1;
      } else if (itemA.tech.name > itemB.tech.name) {
        return 1;
      }
      return 0;
    } else if (itemA.researchDistance > itemB.researchDistance) {
      return 1;
    }
    return -1;
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
        techDistance = tech.tech.requirements[color] - tech.provided[color];
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
