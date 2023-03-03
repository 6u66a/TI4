import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DATA, Player, Race } from '../data/data';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent {
  displayedColumns: string[] = ['name', 'faction', 'position', 'slice'];
  public races: Array<Race> = [];
  public players: Player[] = [];
  public positions: String[] = [];
  public slices: boolean[] = [];
  public currentPosition: number = 0;
  private increment: number = 1;
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
      const playerName: string | undefined | null = this.playerForm.get("name")?.value
      this.playerForm.reset();
      this.players = [...this.players, {name: playerName}];
      input.focus()
    }
  }

  shuffle(button:any) {
    console.log(button);
    this.races = this.shuffleFisherYates([...DATA.races]).slice(0,this.players.length+1);
    this.players = [...this.shuffleFisherYates(this.players)];
    for(let i=0;i<this.players.length;i++){
      this.positions.push(this.formatter(i+1));
      this.slices.push(true);
    }
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

  formatter(i:Number):String {
    switch(i){
      case 1:
        return "Speaker";
      case 2:
        return i+"nd";
      case 3:
        return i+"rd";
      default:
        return i+"th"; 
    }
  }

  draftPosition(i:number):void {
    let copy = [...this.players];
    copy[this.currentPosition].position=this.positions[i];
    this.players=copy;
    this.positions.splice(i,1);
    this.progressCounter();
  }

  draftSlice(i:number):void {
    let copy = [...this.players];
    copy[this.currentPosition].slice=this.slices[i];
    this.players=copy;
    this.slices.splice(i,1);
    this.progressCounter();
  }

  draftRace(i:number):void {
    let copy = [...this.players];
    copy[this.currentPosition].race=this.races[i];
    this.players=copy;
    this.races.splice(i,1);
    this.progressCounter();
  }

  progressCounter():void {
    this.currentPosition+=this.increment;
    if(this.currentPosition===-1) {
      this.currentPosition=0;
      this.increment*=-1;
    } 
    else if(this.currentPosition===this.players.length) {
      this.currentPosition=this.players.length-1;
      this.increment*=-1;
    }
  }

  incomplete():boolean {
    for(let i=0;i<this.players.length;i++) {
      if(!this.players[i].position || !this.players[i].race || !this.players[i].slice) {
        return true;
      }
    }
    return false;
  }
}
