import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RuntimeTech, TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css','../../../../node_modules/bulma/css/bulma.css'],
})
export class TechComponent implements OnInit {

  @Input() tech: RuntimeTech;
  @Output() onResearched = new EventEmitter<RuntimeTech>();

  currentClasses: {};

  setCurrentClasses() {
    this.currentClasses = {
      'is-light': !this.tech.researched,
      'is-dark': this.tech.researched
    }
  }

  constructor() { }

  ngOnInit() {
    console.log(this.tech.tech.name);
    this.setCurrentClasses();
    this.updateRequirements();
  }

  public updateRequirements():void {
    this.tech.available = this.checkForMatchingRequirements();
  }

  checkForMatchingRequirements():Boolean {
    //TODO Possible bug here
    for(let color in this.tech.tech.requirements) {
      if(this.tech.provided[color]<this.tech.tech.requirements[color]) return false;
    }
    return true;
  }

  getRequirement(color: TechColor, toCheck: TechColors): Number {
    if (color in toCheck) {
      return toCheck[color];
    } else {
      return 0;
    }
  }

  researchMe() {
    this.onResearched.emit(this.tech);
    this.setCurrentClasses();
  }

}
