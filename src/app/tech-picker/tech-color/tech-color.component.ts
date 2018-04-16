import { Input, Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';
import { timestamp } from 'rxjs/operator/timestamp';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-tech-color',
  templateUrl: './tech-color.component.html',
  styleUrls: ['./tech-color.component.css']
})
export class TechColorComponent implements DoCheck {

  @Input() techColors: TechColors;
  @Input() provided: TechColors;

  public colorEnum = TechColor;
  public deltaTechColor: TechColors = [];

  constructor() {
  }

  public updateDeltaTechColor() {
    if (this.provided !== undefined) {
      for (const color of Object.keys(this.techColors)) {
        this.deltaTechColor[color] = this.techColors[color] - this.provided[color];
      }
    } else {
      this.deltaTechColor = this.techColors;
    }
  }

  ngDoCheck() {
    this.updateDeltaTechColor();
  }
}
