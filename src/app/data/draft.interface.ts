import { Faction } from "./data";
import { RuntimeTech } from "./tech-helper.interface";

export interface Player {
  name: String | undefined | null;
  position?: String;
  faction?: Faction;
  slice?: Boolean;
}

export interface State {
  faction?: Faction;
  tech: Array<RuntimeTech>;
}

export enum Complexity {
  Low,
  Moderate,
  High
}