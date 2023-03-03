import { Component } from '@angular/core';
import { DATA, Race } from '../data/data';

@Component({
  selector: 'app-race-chooser',
  templateUrl: './tech-helper.component.html',
  styleUrls: ['./tech-helper.component.css']
})
export class TechHelperComponent {

  public races: Array<Race> = DATA.races;

  constructor() { }

}
