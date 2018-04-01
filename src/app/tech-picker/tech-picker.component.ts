import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tech, DATA, Race, State, RuntimeTech, TechColors } from '../data';
import { TechColor } from '../tech-color.enum';
import { TechComponent } from './tech/tech.component';

@Component({
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css']
})
export class TechPickerComponent implements OnInit {

  @ViewChildren(TechComponent) techComponents: Array<TechComponent>;

  private state: State;

  constructor(private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('raceid');
    let race: Race = DATA.races.find(race => race.id === id);
    let provided: TechColors = {
      [TechColor.blue]: 0,
      [TechColor.red]: 0,
      [TechColor.green]: 0,
      [TechColor.yellow]: 0
    };
    this.state = {
      race: race,
      tech: race.tech.map(item => {
        return { tech: item, researched: false, provided: provided, available: false }
      }).concat(DATA.genericTech.map(item => {
        return { tech: item, researched: false, provided: provided, available: false }
      }))
    };
  }

  ngOnInit() {
  }

  onResearched(tech: RuntimeTech) {
    tech.researched = !tech.researched;
    if (tech.tech.provides != undefined) {
      (tech.researched) ? tech.provided[tech.tech.provides]++ : tech.provided[tech.tech.provides]--;
    }
    this.techComponents.forEach(item => item.updateRequirements());
  }
}
