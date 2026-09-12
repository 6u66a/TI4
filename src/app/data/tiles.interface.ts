import { Edition, Faction } from "./data";

export enum SystemType {
  Blue,
  Red,
  Green
} 

export enum PlanetTrait {
    HAZARDOUS,
    INDUSTRIAL,
    CULTURAL
}

export enum TechSpecialty {
    BIOTIC,
    WARFARE,
    PROPULSION,
    CYBERNETIC
}

export enum Anomaly {
    NEBULA,
    GRAVITY_RIFT,
    ASTEROID_FIELD,
    SUPERNOVA,
    ENTROPIC_SCAR
}

export enum Wormwhole {
    ALPHA,
    BETA,
    GAMMA,
    DELTA
}

export interface System {
  id: Number;
  type: SystemType;
  edition: Edition;
  planets?: Array<Planet>;
  anomalies?: Array<Anomaly>;
  wormholes?: Array<Wormwhole>;
}

export interface Planet {
  name: String;
  traits: Array<PlanetTrait>;
  resources: Number;
  influence: Number;
  legendary?: Boolean;
  homePlanet?: Faction;
  techSpecialty?: Array<TechSpecialty>;
}