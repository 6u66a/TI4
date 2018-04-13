import { Component, OnInit } from '@angular/core';
import { DATA, Race } from '../data';

@Component({
  selector: 'app-race-chooser',
  templateUrl: './race-chooser.component.html',
  styleUrls: ['./race-chooser.component.css','../../../node_modules/bulma/css/bulma.css']
})
export class RaceChooserComponent implements OnInit {

  public races:Array<Race> = DATA.races;

  constructor() { }

  ngOnInit() {
  }
}
