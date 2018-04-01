import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RuntimeTech, TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {

  @Input() tech: RuntimeTech;
  @Output() onResearched = new EventEmitter<RuntimeTech>();

  requirementsFullfilled: Boolean = false;

  currentClasses: {};

  setCurrentClasses() {
    this.currentClasses = {
      'is-danger': !this.tech.researched,
      'is-success': this.tech.researched
    }
  }

  constructor() { }

  ngOnInit() {
    this.setCurrentClasses();
    this.updateRequirements();
  }

  public updateRequirements():void {
    this.tech.available = this.checkForMatchingRequirements();
  }

  checkForMatchingRequirements():Boolean {
    for(let color in this.tech.tech.requirements) {
      if(this.tech.provided[color]<this.tech.tech.requirements[color])return false;
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
