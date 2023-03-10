import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { DATA, Race, Tech } from '../data/data';
import { Edition } from '../data/edition.enum';

@Component({
  selector: 'app-race-chooser',
  templateUrl: './tech-helper.component.html',
  styleUrls: ['./tech-helper.component.css']
})
export class TechHelperComponent {

  public races: Array<Race> = [...DATA.races];
  public selectedFaction?:Race;
  public tech:Tech[] = [];
  private filter: Edition[] = [Edition.Base];

  constructor() { }

  pokChange(change:MatCheckboxChange) {
    if(change.checked){
      this.filter.push(Edition.PoK);
    } else {
      this.filter.splice(this.filter.lastIndexOf(Edition.PoK));
    }
  }

  raceClick_hdl(race:Race) {
    this.selectedFaction=race;
    if(race.edition===Edition.PoK){
      this.tech = [...DATA.genericTech, ...race.tech]
    } else if(this.selectedFaction.id===11) {
      this.tech = [...DATA.genericTech, ...this.races.flatMap(r => r.tech)].filter(t => this.filter.indexOf(t.edition)!==-1)
    }
    else {
      this.tech = [...DATA.genericTech, ...race.tech].filter(t => this.filter.indexOf(t.edition)!==-1)
    }
  }
}
