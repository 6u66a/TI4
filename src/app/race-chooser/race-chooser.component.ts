import { Component, OnInit } from '@angular/core';
import { DATA, Race } from '../data';

@Component({
  selector: 'app-race-chooser',
  templateUrl: './race-chooser.component.html',
  styleUrls: ['./race-chooser.component.css']
})
export class RaceChooserComponent implements OnInit {

  private races:Array<Race> = DATA.races;

  constructor() { }

  ngOnInit() {
  }
}