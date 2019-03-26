import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DATA, Race } from '../data';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  public races: Array<Race> = new Array();

  constructor() {
    const random: Array<Number> = new Array();
    while (random.length < 6) {
      const candidate: Number = Math.floor(Math.random() * 17);
      const search: Number = random.find((num) => candidate === num);
      if (search === undefined) {
        random.push(candidate);
      }
    }
    random.forEach((val: number) => {
      this.races.push(DATA.races[val]);
    });
  }

  ngOnInit() {
  }

}
