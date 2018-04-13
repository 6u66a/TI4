import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tech, DATA, Race, State, RuntimeTech, TechColors } from '../data';
import { TechColor } from '../tech-color.enum';
import { TechComponent } from './tech/tech.component';

@Component({
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css','../../../node_modules/bulma/css/bulma.css']
})
export class TechPickerComponent implements OnInit {

  @ViewChildren(TechComponent) techComponents: Array<TechComponent>;

  public state: State;
  public provided : TechColors;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = +this.route.snapshot.params['raceid'];
    let race: Race = DATA.races.find(race => race.id === id);
    if(race===undefined) {
      //TODO do this via Guard
      router.navigate(['']);
    }
    this.provided = {
      [TechColor.blue]: 0,
      [TechColor.red]: 0,
      [TechColor.green]: 0,
      [TechColor.yellow]: 0
    };
    this.state = {
      race: race,
      tech: race.tech.map(item => {
        return { tech: item, researched: false, provided: this.provided, available: false }
      }).concat(DATA.genericTech.map(item => {
        return { tech: item, researched: false, provided: this.provided, available: false }
      }))
    };
  }

  filterResearched() {
    this.techComponents.forEach(item => item.updateVisibility("researched"));
  }

  filterResearchable() {
    this.techComponents.forEach(item => item.updateVisibility("researchable"));
  }

  filterUnavailable() {
    this.techComponents.forEach(item => item.updateVisibility("unavailable"));
  }

  showAll() {
    this.techComponents.forEach(item => item.updateVisibility("showAll"));
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
