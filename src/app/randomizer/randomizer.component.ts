import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DATA, IPlayer as Player, Race } from '../data';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  public races: Array<Race> = [...DATA.races];
  public players: Player[] = [];
  playerForm = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor() {
    const random: Array<number> = new Array();
    while (random.length < 6) {
      const candidate: number = Math.floor(Math.random() * 17);
      const search: number | undefined = random.find((num) => candidate === num);
      if (search === undefined) {
        random.push(candidate);
      }
    }
    random.forEach((val) => {
      this.races.push(DATA.races[val]);
    });
  }

  ngOnInit() {
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
    }
    const speaker: number = Math.floor(Math.random() * this.players.length);
    this.players[speaker].name = this.players[speaker].name + " - SPEAKER"
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
