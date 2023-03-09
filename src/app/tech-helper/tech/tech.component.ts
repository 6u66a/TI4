import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Edition } from 'src/app/data/edition.enum';
import { RuntimeTech, TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent {

  @Input() tech: RuntimeTech = {
    tech: { id: 0, name: "", requirements: [], description: "", provides: 0, edition: Edition.Base },
    provided: {},
    researched: false,
    researchDistance: 0,
    available: false
  };
  @Input() provided: TechColors = {};
  @Output() researched: EventEmitter<RuntimeTech> = new EventEmitter<RuntimeTech>();

  public showDescription = false;

  techColor(): string {
    switch (this.tech.tech.provides) {
      case TechColor.black:
        return "white";
      case TechColor.blue:
        return "blue";
      case TechColor.red:
        return "red";
      case TechColor.green:
        return "green";
      case TechColor.yellow:
        return "yellow";
    }
  }

  constructor() {
  }

  researchMe(event: MouseEvent) {
    event.cancelBubble = true;
    this.researched.emit(this.tech);
  }

}
