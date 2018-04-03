import { TechColor } from "./tech-color.enum";

export interface Data {
  races: Array<Race>;
  genericTech: Array<Tech>;
}

export interface Race {
  id: Number;
  name: String;
  tech: Array<Tech>;
}

export interface Tech {
  name: String;
  requirements: TechColors;
  provides: TechColor;
}

export interface RuntimeTech {
  tech: Tech;
  provided: TechColors;
  researched: Boolean;
  available: Boolean;
}

export interface TechColors {
  [color: number]: number;
}

export interface State {
  race: Race;
  tech: Array<RuntimeTech>;
}

export const DATA: Data = {
  races: [
    {
      id: 1,
      name: "Universities of Jol-Nar",
      tech: [
        {
          name: "Spacial Conduit Network",
          requirements: {
            [TechColor.blue]: 2,
          },
          provides: null
        },
        {
          name: "E-res Siphons",
          requirements: {
            [TechColor.yellow]: 2,
          },
          provides: null
        },
      ]
    },
    {
      id: 2,
      name: "Sardakk N'orr",
      tech: []
    },
    {
      id: 3,
      name: "Mentak Coalition",
      tech: []
    },
    {
      id: 4,
      name: "Barony of Letnev",
      tech: []
    },
    {
      id: 5,
      name: "Yin Brotherhood",
      tech: []
    },
    {
      id: 6,
      name: "Ghosts of Creuss",
      tech: []
    },
    {
      id: 7,
      name: "L1z1x Mindnet",
      tech: []
    },
    {
      id: 8,
      name: "Naalu Collective",
      tech: []
    },
    {
      id: 9,
      name: "Xxcha Kingdom",
      tech: []
    },
    {
      id: 10,
      name: "Federation of Sol",
      tech: []
    },
    {
      id: 11,
      name: "Winnu",
      tech: []
    },
    {
      id: 12,
      name: "Embers of Muat",
      tech: []
    },
    {
      id: 13,
      name: "Nekro Virus",
      tech: []
    },
    {
      id: 14,
      name: "Clan of Saar",
      tech: []
    },
    {
      id: 15,
      name: "Emirates of Hacan",
      tech: []
    },
    {
      id: 16,
      name: "Yssaril Tribes",
      tech: []
    },
    {
      id: 17,
      name: "Arborec",
      tech: []
    },
  ],
  genericTech: [
    {
      name: "Assault Cannon",
      requirements: { [TechColor.red]: 3 },
      provides: TechColor.red
    },
    {
      name: "Duranium Armor",
      requirements: { [TechColor.red]: 2 },
      provides: TechColor.red
    },
    {
      name: "Magen Defense Grid",
      requirements: { [TechColor.red]: 1 },
      provides: TechColor.red
    },
    {
      name: "Plasma Scoring",
      requirements: {},
      provides: TechColor.red
    },
    {
      name: "Integrated Economy",
      requirements: { [TechColor.yellow]: 3 },
      provides: TechColor.yellow
    },
    {
      name: "Transit Diodes",
      requirements: { [TechColor.yellow]: 2 },
      provides: TechColor.yellow
    },
    {
      name: "Graviton Laser Systems",
      requirements: { [TechColor.yellow]: 1 },
      provides: TechColor.yellow
    },
    {
      name: "Sarween Tools",
      requirements: {},
      provides: TechColor.yellow
    },
    {
      name: "X-89 Bacterial Weapon",
      requirements: { [TechColor.green]: 3 },
      provides: TechColor.green
    },
    {
      name: "Hyper Methabolism",
      requirements: { [TechColor.green]: 2 },
      provides: TechColor.green
    },
    {
      name: "Dacxive Animators",
      requirements: { [TechColor.green]: 1 },
      provides: TechColor.green
    },
    {
      name: "Neural Motivator",
      requirements: {},
      provides: TechColor.green
    },
    {
      name: "Light / Wave Deflector",
      requirements: { [TechColor.blue]: 3 },
      provides: TechColor.blue
    },
    {
      name: "Fleet Logistics",
      requirements: { [TechColor.blue]: 2 },
      provides: TechColor.blue
    },
    {
      name: "Gravity Drive",
      requirements: { [TechColor.blue]: 1 },
      provides: TechColor.blue
    },
    {
      name: "Antimass Deflectors",
      requirements: {},
      provides: TechColor.blue
    },
    {
      name: "War Sun",
      requirements: { [TechColor.red]: 3, [TechColor.yellow]: 1 },
      provides: null
    },
    {
      name: "Dreadnought II",
      requirements: { [TechColor.blue]: 2, [TechColor.yellow]: 1 },
      provides: null
    },
    {
      name: "Cruiser II",
      requirements: { [TechColor.red]: 1, [TechColor.yellow]: 1, [TechColor.green]: 1 },
      provides: null
    },
    {
      name: "Destroyer II",
      requirements: { [TechColor.red]: 2 },
      provides: null
    },
    {
      name: "PDS II",
      requirements: { [TechColor.red]: 1, [TechColor.yellow]: 1 },
      provides: null
    },
    {
      name: "Carrier II",
      requirements: { [TechColor.blue]: 2 },
      provides: null
    },
    {
      name: "Fighter II",
      requirements: { [TechColor.blue]: 1, [TechColor.green]: 1 },
      provides: null
    },
    {
      name: "Infantry II",
      requirements: { [TechColor.green]: 2 },
      provides: null
    },
    {
      name: "Space Dock II",
      requirements: { [TechColor.yellow]: 2 },
      provides: null
    },
  ]
}
