import { Edition } from "./data";

export enum TechColor {
  red,
  green,
  yellow,
  blue,
  black
} 

export interface Tech {
  id: number;
  name: String;
  requirements: TechColors;
  provides: TechColor;
  description: String;
  edition: Edition;
}

export interface RuntimeTech {
  tech: Tech;
  provided: TechColors;
  researched: boolean;
  available: boolean;
  researchDistance: number;
}

export interface TechColors {
  [color: number]: number;
}