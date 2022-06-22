import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DATA, IPlayer as Player, Race } from '../data';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css'],
  animations: [
    trigger('faction', [
      transition('* => revealed', [
        query('mat-chip-avatar', style({ opacity: 0 })),
        query('mat-chip-avatar', animate(1000, style({ opacity: 1 }))),
      ])
    ])
  ]
})
export class RandomizerComponent implements OnDestroy {

  public races: Array<Race> = [...DATA.races];
  public players: Player[] = [];
  state = '';
  playerForm = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor() { }

  ngOnDestroy(): void {
    this.players = [];
    this.playerForm.reset();
  }

  addPlayer() {
    if (this.playerForm.valid) {
      const playerName: string = this.playerForm.get("name")?.value
      this.playerForm.reset();
      this.players.push({ name: playerName })
    }
  }

  shuffle() {
    const shuffledRaces = this.shuffleFisherYates(this.races)
    this.players = this.shuffleFisherYates(this.players)
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].factionName = shuffledRaces[i].name;
      this.players[i].speaker = false;
    }
    const speaker: number = Math.floor(Math.random() * this.players.length);
    this.players[speaker].speaker = true;
    this.state = "revealed";
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
