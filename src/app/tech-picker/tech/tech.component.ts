import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RuntimeTech, TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css', '../../../../node_modules/bulma/css/bulma.css'],
})
export class TechComponent implements OnInit {

  @Input() tech: RuntimeTech;
  @Output() researched: EventEmitter<RuntimeTech> = new EventEmitter<RuntimeTech>();

  private showDescription: Boolean = false;
  public visible: Boolean = true;

  currentClasses: {};
  techColorClasses: {};

  setCurrentClasses() {
    this.currentClasses = {
    };
  }

  setTechColorClasses() {
    this.techColorClasses = {
      'has-text-danger': this.tech.tech.provides === TechColor.red,
      'has-text-success': this.tech.tech.provides === TechColor.green,
      'has-text-warning': this.tech.tech.provides === TechColor.yellow,
      'has-text-link': this.tech.tech.provides === TechColor.blue,
    };
  }

  constructor() { }

  ngOnInit() {
    this.setTechColorClasses();
    this.setCurrentClasses();
  }

  public updateVisibility(flag: String): void {
    switch (flag) {
      case 'researchable':
        this.visible = this.tech.available && !this.tech.researched;
        break;
      case 'unavailable':
        this.visible = !this.tech.available;
        break;
      case 'researched':
        this.visible = this.tech.researched;
        break;
      case 'showAll':
        this.visible = true;
        break;
    }
  }

  descriptionToggle() {
    this.showDescription = !this.showDescription;
  }

  getRequirement(color: TechColor, toCheck: TechColors): Number {
    if (color in toCheck) {
      return toCheck[color];
    } else {
      return 0;
    }
  }

  researchMe() {
    this.researched.emit(this.tech);
    this.setCurrentClasses();
  }

}
