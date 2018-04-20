import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { RuntimeTech, TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';
import { TechColorComponent } from '../tech-color/tech-color.component';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css', '../../../../node_modules/bulma/css/bulma.css'],
})
export class TechComponent implements OnInit {

  @Input() tech: RuntimeTech;
  @Input() provided: TechColors;
  @Output() researched: EventEmitter<RuntimeTech> = new EventEmitter<RuntimeTech>();

  private showDescription = false;

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

  constructor() {
   }

  ngOnInit() {
    this.setTechColorClasses();
    this.setCurrentClasses();
  }

  descriptionToggle() {
    this.showDescription = !this.showDescription;
  }

  researchMe() {
    this.researched.emit(this.tech);
    this.setCurrentClasses();
  }

}
