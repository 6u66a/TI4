import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { DATA, Race } from '../data';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css'],
  animations: [
    trigger('faction', [
      transition('* => revealed', [
        query('mat-chip', style({ opacity: 0 })),
        query('mat-chip', animate(1000, style({ opacity: 1 }))),
      ])
    ])
  ]
})
export class RandomizerComponent implements OnDestroy {

  public races: Array<Race> = [];
  public players: String[] = [];
  state = '';
  playerForm = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor() { }

  ngOnDestroy(): void {
    this.players = [];
    this.playerForm.reset();
  }

  addPlayer(input:HTMLInputElement) {
    if (this.playerForm.valid) {
      const playerName: string = this.playerForm.get("name")?.value
      this.playerForm.reset();
      this.players.push(playerName)
      input.focus()
    }
  }

  shuffle(button:MatButton) {
    this.races = this.shuffleFisherYates([...DATA.races]).slice(0,this.players.length+1);
    this.players = this.shuffleFisherYates(this.players)
    this.state = "revealed";
    button.disabled=true
  }

  shuffleFisherYates(array: any[]) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

}
