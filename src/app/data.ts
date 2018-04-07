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
  description: String;
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
          description: "",
          provides: TechColor.blue
        },
        {
          name: "E-res Siphons",
          requirements: {
            [TechColor.yellow]: 2,
          },
          description: "",
          provides: TechColor.yellow
        },
      ]
    },
    {
      id: 2,
      name: "Sardakk N'orr",
      tech: [
        {
          name: "Exotrireme II",
          requirements: {
            [TechColor.blue]: 2,
            [TechColor.yellow]: 1
          },
          description: "",
          provides: null
        },
        {
          name: "Valkyrie Particle Weave",
          requirements: {
            [TechColor.red]: 2,
          },
          description: "",
          provides: TechColor.red
        },
      ]
    },
    {
      id: 3,
      name: "Mentak Coalition",
      tech: [
        {
          name: "Mirror Computing",
          requirements: {
            [TechColor.yellow]: 3,
          },
          description: "",
          provides: TechColor.yellow
        },
        {
          name: "Salvage Operation",
          requirements: {
            [TechColor.yellow]: 2,
          },
          description: "",
          provides: TechColor.yellow
        },
      ]
    },
    {
      id: 4,
      name: "Barony of Letnev",
      tech: [
        {
          name: "L4 Disruptors",
          requirements: {
            [TechColor.yellow]: 1,
          },
          description: "",
          provides: TechColor.yellow
        },
        {
          name: "Non-Euclidean Shielding",
          requirements: {
            [TechColor.red]: 2,
          },
          description: "",
          provides: TechColor.red
        },
      ]
    },
    {
      id: 5,
      name: "Yin Brotherhood",
      tech: [
        {
          name: "Impulse Core",
          requirements: {
            [TechColor.yellow]: 2,
          },
          provides: TechColor.yellow,
          description: "At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighter ships, if able."
        },
        {
          name: "Yin Spinner",
          requirements: {
            [TechColor.green]: 2,
          },
          provides: TechColor.green,
          description: "After 1 or more of your units use Production, place 1 infantry from your reinforcements on a planet you control in that system."
        },
      ]
    },
    {
      id: 6,
      name: "Ghosts of Creuss",
      tech: [
        {
          name: "Dimensional Splicer",
          requirements: {
            [TechColor.red]: 1,
          },
          provides: TechColor.red,
          description: "At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."
        },
        {
          name: "Wormhole Generator",
          requirements: {
            [TechColor.blue]: 2,
          },
          provides: TechColor.blue,
          description: "At the start of the status phase, place or move a Creuss wormhole token into either a system that contains a planet you control or a non-HS that does not contain another player's ships."
        },
      ]
    },
    {
      id: 7,
      name: "L1z1x Mindnet",
      tech: []
    },
    {
      id: 8,
      name: "Naalu Collective",
      tech: [
        {
          name: "Neuroglaive",
          requirements: {
            [TechColor.green]: 3
          },
          provides: TechColor.green,
          description: "After another player activates a system that contains 1 or more of your ships, that player removes 1 CT from his Fleet Pool and returns it to his reinforcements."
        },
        {
          name: "Hybrid Crystal Fighter II",
          requirements: {
            [TechColor.green]: 1,
            [TechColor.blue]: 1
          },
          provides: null,
          description: "<ul><li>Naalu Fighter (Cost 1/2; Combat 7; Move 2)</li><li>This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.</li></ul>"
        },
      ]
    },
    {
      id: 9,
      name: "Xxcha Kingdom",
      tech: []
    },
    {
      id: 10,
      name: "Federation of Sol",
      tech: [
        {
          name: "Spec Ops II",
          requirements: {
            [TechColor.green]: 2
          },
          provides: null,
          description: "<ul><li>Sol Infantry (Cost 1/2; Combat 6)</li><li>After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li></ul>"
        },
        {
          name: "Advanced Carrier II",
          requirements: {
            [TechColor.blue]: 2
          },
          provides: null,
          description: "<ul><li>Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)</li><li>Sustain Damage.</li></ul>"
        },
      ]
    },
    {
      id: 11,
      name: "Winnu",
      tech: [
        {
          name: "Hegemonic Trade Policy",
          requirements: {
            [TechColor.yellow]: 2
          },
          provides: TechColor.yellow,
          description: "Exhaust this card when 1 or more of your units use Production; swap the resource and influence values of 1 planet you control until the end of your turn."
        },
        {
          name: "Lazax Gate Folding",
          requirements: {
            [TechColor.blue]: 2
          },
          provides: TechColor.blue,
          description: "<ul><li>During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole.</li><li>ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.</li></ul>"
        },
      ]
    },
    {
      id: 12,
      name: "Embers of Muat",
      tech: [
        {
          name: "Prototype War Sun II",
          requirements: {
            [TechColor.yellow]: 1,
            [TechColor.red]: 3
          },
          provides: null,
          description: "<ul><li>Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)</li><li>Other player's units in this system lose Planetary Shield.</li><li>Sustain Damage; and, Bombardment 3[x3].</li></ul>"
        },
        {
          name: "Magmus Reactor",
          requirements: {
            [TechColor.red]: 2
          },
          provides: TechColor.red,
          description: "<ul><li>Your ships can move into superovas.</li><li>After 1 or more of your units use Production in a system that either contains a war sun or is adjacent to a supernova, gain 1 TG.</li>"
        },
      ]
    },
    {
      id: 13,
      name: "Nekro Virus",
      tech: []
    },
    {
      id: 14,
      name: "Clan of Saar",
      tech: [
        {
          name: "Floating Factory II",
          requirements: {
            [TechColor.yellow]: 2
          },
          provides: null,
          description: "<ul><li>Saar Space Dock (Move 2, Capacity 5)</li><li>This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.</li><li>Production 7.</li></ul>"
        },
        {
          name: "Chaos Mapping",
          requirements: {
            [TechColor.blue]: 1
          },
          provides: TechColor.blue,
          description: "<ul><li>Other players cannot activate asteroid fields that contain 1 or more of your ships.</li><li>At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.</li></ul>"
        },
      ]
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
      description: "At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.",
      provides: TechColor.red
    },
    {
      name: "Duranium Armor",
      requirements: { [TechColor.red]: 2 },
      description: "During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round.",
      provides: TechColor.red
    },
    {
      name: "Magen Defense Grid",
      requirements: { [TechColor.red]: 1 },
      description: "You may exhaust this card at the start of a round of ground combat on a planet that contains 1 or more of your units that have Planetary Shield; your opponent cannot make combat rolls during this combat round. Magen Defense Grid CANNOT be used when an enemy War Sun is bombarding the planet (56.3).",
      provides: TechColor.red
    },
    {
      name: "Plasma Scoring",
      requirements: {},
      description: "When 1 or more of your unit use Bombardment or Space Canon, 1 of those units may roll 1 additional die.",
      provides: TechColor.red
    },
    {
      name: "Integrated Economy",
      requirements: { [TechColor.yellow]: 3 },
      description: "After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet’s resource value.",
      provides: TechColor.yellow
    },
    {
      name: "Transit Diodes",
      requirements: { [TechColor.yellow]: 2 },
      description: "You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your GFs from the game board and place them on 1 or more planets you control.",
      provides: TechColor.yellow
    },
    {
      name: "Graviton Laser Systems",
      requirements: { [TechColor.yellow]: 1 },
      description: "You may exhaust this card before 1 or of your units use Space Cannon; hits produced by those units must be assigned to non-fighter ships if able.",
      provides: TechColor.yellow
    },
    {
      name: "Sarween Tools",
      requirements: {},
      description: "When 1 or more of your units use Production, reduce the combined cost of the produced units by 1.",
      provides: TechColor.yellow
    },
    {
      name: "X-89 Bacterial Weapon",
      requirements: { [TechColor.green]: 3 },
      description: "Action: Exhaust this card and choose 1 planet in a system that contains 1 or more of your ships that have Bombardment; destroy all infantry on that planet (Planetary Shields cannot stop this technology).",
      provides: TechColor.green
    },
    {
      name: "Hyper Methabolism",
      requirements: { [TechColor.green]: 2 },
      description: "During the status phase, gain 3 CTs instead of 2.",
      provides: TechColor.green
    },
    {
      name: "Dacxive Animators",
      requirements: { [TechColor.green]: 1 },
      description: "After you win an ground combat, you may place 1 infantry from your reinforcements on the planet.",
      provides: TechColor.green
    },
    {
      name: "Neural Motivator",
      requirements: {},
      description: "During the Status Phase, draw 2 action cards instead of 1.",
      provides: TechColor.green
    },
    {
      name: "Light / Wave Deflector",
      requirements: { [TechColor.blue]: 3 },
      description: "Your ships can move through systems that contain other players’ ships.",
      provides: TechColor.blue
    },
    {
      name: "Fleet Logistics",
      requirements: { [TechColor.blue]: 2 },
      description: "During each of your turn of the Action Phase, you may perform 2 actions instead of 1.",
      provides: TechColor.blue
    },
    {
      name: "Gravity Drive",
      requirements: { [TechColor.blue]: 1 },
      description: "You After you activate a system, apply +1 to the move value of 1 of your ships during the Tactical Action.",
      provides: TechColor.blue
    },
    {
      name: "Antimass Deflectors",
      requirements: {},
      description: "Your ships can move through and into Asteroid Fields. When other players’ units use Space Canon against your units, apply -1 to the result of each die roll.",
      provides: TechColor.blue
    },
    {
      name: "War Sun",
      requirements: { [TechColor.red]: 3, [TechColor.yellow]: 1 },
      description: "<ul><li>Cost 12; Battle 3[x3]; Move 2; Capacity 6</li><li>Other players’ units in this system lose Planetary Shield</li><li>Sustain Damage</li><li>Bombardment 3[x3].</li></ul>",
      provides: null
    },
    {
      name: "Dreadnought II",
      requirements: { [TechColor.blue]: 2, [TechColor.yellow]: 1 },
      description: "<ul><li>Cost 4; Battle 5; Move 2; Capacity 1</li><li>This unit cannot be destroyed by the “Direct Hit” action cards</li><li>Sustain Damage</li><li>Bombardment 5</li></ul>",
      provides: null
    },
    {
      name: "Cruiser II",
      requirements: { [TechColor.red]: 1, [TechColor.yellow]: 1, [TechColor.green]: 1 },
      description: "Cost 2; Battle 6; Move 3; Capacity 1",
      provides: null
    },
    {
      name: "Destroyer II",
      requirements: { [TechColor.red]: 2 },
      description: "<ul><li>Cost 1; Battle 8; Move 2</li><li>Anti-fighter barrage 6[x3].</li></ul>",
      provides: null
    },
    {
      name: "PDS II",
      requirements: { [TechColor.red]: 1, [TechColor.yellow]: 1 },
      description: "<ul><li>You may use this unit’s Space Canon against ships that are adjacent to this system</li><li>Planetary Shield</li><li>Space Cannon 5</li></ul>",
      provides: null
    },
    {
      name: "Carrier II",
      requirements: { [TechColor.blue]: 2 },
      description: "Cost 3; Battle 9; Move 2; Capacity 6",
      provides: null
    },
    {
      name: "Fighter II",
      requirements: { [TechColor.blue]: 1, [TechColor.green]: 1 },
      description: "<ul><li>Cost 1/2; Battle 8; Move 2</li><li>This unit may move without being transported. Fighters in excess of your ships’ capacity count against your fleet pool.</li></ul>",
      provides: null
    },
    {
      name: "Infantry II",
      requirements: { [TechColor.green]: 2 },
      description: "<ul><li>Cost 1/2; Battle 7</li><li>After this unit is destroyed, roll 1 die. If result ≥ 6: place the unit on this card. At the start of your next turn, place each unit on this card on a planet you control in your HS.</li></ul>",
      provides: null
    },
    {
      name: "Space Dock II",
      requirements: { [TechColor.yellow]: 2 },
      description: "<ul><li>This unit’s Production value is equal to 4 more than the resource value of this planet</li><li>Up to 3 fighters in this system do not count toward your ships’ capacity</li><li>Production X.</li></ul>",
      provides: null
    },
  ]
}
