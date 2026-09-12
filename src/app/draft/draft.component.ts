import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../appstate/settings.service';
import { DATA, Faction, Player } from '../data/data';
import { Complexity } from '../data/complexity.enum';

@Component({
  standalone: false,
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent {
  private readonly settingsService = inject(SettingsService);
  private readonly factionIconNames: Record<number, string> = {
    1: 'Arborec.png',
    2: 'Letnev.png',
    3: 'Saar.png',
    4: 'Muaat.png',
    5: 'Hacan.png',
    6: 'Sol.png',
    7: 'Creuss.png',
    8: 'L1Z1X.png',
    9: 'Mentak.png',
    10: 'Naalu.png',
    11: 'Nekro.png',
    12: 'Sardakk.png',
    13: 'Jol Nar.png',
    14: 'Winnu.png',
    15: 'Xxcha.png',
    16: 'Yin.png',
    17: 'Yssaril.png',
    18: 'Argent.png',
    19: 'Empyrean.png',
    20: 'Mahact.png',
    21: 'Naaz-Rokha.png',
    22: 'Nomad.png',
    23: 'Titans.png',
    24: "Vuil'Raith.png",
    25: "Last Bastion.png",
    26: "Ral-Nel.png",
    27: "Deepwrought.png",
    28: "Crimson Rebellion.png",
    29: "Firmament.png",
    30: 'Keleres.png'
  };
  public readonly complexity = Complexity;
  displayedColumns: string[] = ['name', 'faction', 'position', 'slice'];
  public factions = computed(() => DATA.factions.filter(faction => this.settingsService.settings().editions.includes(faction.edition)));
  public draftFactions = signal<Faction[]>([]);
  public players = signal<Player[]>([]);
  public positions = signal<string[]>([]);
  public slices = signal<boolean[]>([]);
  public currentPosition = signal(0);
  public incomplete = computed(() => this.players().some(player => !player.position || !player.faction || !player.slice));
  private increment: number = 1;
  playerForm = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required)
  })

  constructor() { }

  ngOnDestroy(): void {
    this.players.set([]);
    this.draftFactions.set([]);
    this.playerForm.reset();
  }

  addPlayer(input: HTMLInputElement) {
    if (this.playerForm.valid) {
      const playerName: string | undefined | null = this.playerForm.get("name")?.value
      this.playerForm.reset();
      this.players.update(players => [...players, { name: playerName }]);
      input.focus()
    }
  }

  shuffle(button: any) {
    this.draftFactions.set(this.shuffleFisherYates([...this.factions()])
    .slice(0, this.players().length + this.settingsService.settings().additionalFactions));
    this.players.set(this.shuffleFisherYates([...this.players()]));
    this.positions.set(this.players().map((_, i) => this.formatter(i + 1)));
    this.slices.set(this.players().map(() => true));
    button.disabled = true
  }

  shuffleFisherYates(array: any[]) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  formatter(i: number): string {
    switch (i) {
      case 1:
        return "Speaker";
      case 2:
        return i + "nd";
      case 3:
        return i + "rd";
      default:
        return i + "th";
    }
  }

  complexityLabel(complexity: Complexity): string {
    return Complexity[complexity];
  }

  complexityBars(complexity: Complexity): boolean[] {
    switch (complexity) {
      case Complexity.Low:
        return [false, true, true];
      case Complexity.Moderate:
        return [false, false, true];
      case Complexity.High:
        return [false, false, false];
    }
  }

  factionIcon(faction: Faction): string | undefined {
    const iconName = this.factionIconNames[Number(faction.id)];
    return iconName ? `assets/factions/${iconName}` : undefined;
  }

  draftPosition(i: number): void {
    this.players.update(players => players.map((player, index) => index === this.currentPosition() ? { ...player, position: this.positions()[i] } : player));
    this.positions.update(positions => positions.filter((_, index) => index !== i));
    this.progressCounter();
  }

  draftSlice(i: number): void {
    this.players.update(players => players.map((player, index) => index === this.currentPosition() ? { ...player, slice: this.slices()[i] } : player));
    this.slices.update(slices => slices.filter((_, index) => index !== i));
    this.progressCounter();
  }

  draftFaction(i: number): void {
    this.players.update(players => players.map((player, index) => index === this.currentPosition() ? { ...player, faction: this.draftFactions()[i] } : player));
    this.draftFactions.update(factions => factions.filter((_, index) => index !== i));
    this.progressCounter();
  }

  progressCounter(): void {
    this.currentPosition.update(position => position + this.increment);
    if (this.currentPosition() === -1) {
      this.currentPosition.set(0);
      this.increment *= -1;
    }
    else if (this.currentPosition() === this.players().length) {
      this.currentPosition.set(this.players().length - 1);
      this.increment *= -1;
    }
  }
}
