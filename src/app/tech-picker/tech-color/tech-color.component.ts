import { Input, Component, OnInit } from '@angular/core';
import { TechColors } from '../../data';
import { TechColor } from '../../tech-color.enum';

@Component({
  selector: 'app-tech-color',
  templateUrl: './tech-color.component.html',
  styleUrls: ['./tech-color.component.css']
})
export class TechColorComponent implements OnInit {

  @Input() techColors: TechColors;

  public colorEnum = TechColor;

  constructor() {
  }

  ngOnInit() {
    console.log(this.techColors);
  }

}
