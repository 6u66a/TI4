import { Component, computed, input } from '@angular/core';
import { TechColors } from '../../data/data';
import { TechColor } from '../../data/tech-color.enum';

@Component({
  standalone: false,
  selector: 'app-tech-color',
  templateUrl: './tech-color.component.html',
  styleUrls: ['./tech-color.component.css']
})
export class TechColorComponent {

  techColors = input<TechColors>({});
  provided = input<TechColors>({});

  public colorEnum = TechColor;
  public deltaTechColor = computed(() => {
    const techColors = this.techColors();
    const provided = this.provided();
    const delta: TechColors = {};
    for (const color of Object.keys(techColors)) {
      const index = Number.parseInt(color);
      delta[index] = techColors[index] - (provided[index] ?? 0);
    }
    return delta;
  });

  public dots(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index);
  }

  constructor() {
  }

}
