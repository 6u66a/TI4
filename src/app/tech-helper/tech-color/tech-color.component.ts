import { Component, DoCheck, Input } from '@angular/core';
import { TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  selector: 'app-tech-color',
  templateUrl: './tech-color.component.html',
  styleUrls: ['./tech-color.component.css']
})
export class TechColorComponent implements DoCheck {

  @Input() techColors: TechColors = [];
  @Input() provided: TechColors = [];

  public colorEnum = TechColor;
  public deltaTechColor: TechColors = [];
  public Arr = Array;

  constructor() {
  }

  public updateDeltaTechColor() {
    if (this.provided !== undefined) {
      for (const color of Object.keys(this.techColors)) {
        let index = Number.parseInt(color);
        this.deltaTechColor[index] = this.techColors[index] - this.provided[index];
      }
    } else {
      this.deltaTechColor = this.techColors;
    }
  }

  ngDoCheck() {
    this.updateDeltaTechColor();
  }
}
