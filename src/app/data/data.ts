import { Edition } from "./edition.enum";
import { TechColor } from "./tech-color.enum";

export interface Data {
  races: Array<Race>;
  genericTech: Array<Tech>;
}

export interface Player {
  name: String | undefined | null;
  position?: String;
  race?: Race;
  slice?: Boolean;
}

export interface Race {
  id: Number;
  name: String;
  tech: Array<Tech>;
  startingtech: Array<number>;
  edition: Edition;
}

export interface Tech {
  id: number;
  name: String;
  requirements: TechColors;
  provides: TechColor;
  description: String;
  edition: Edition
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

export interface State {
  race?: Race;
  tech: Array<RuntimeTech>;
}

export const DATA: Data = {
  races: [
    {
      id: 1,
      name: "Arborec",
      startingtech: [37],
      edition: Edition.Base,
      tech: [
        {
          id: 1,
          name: "Letani Warrior II",
          requirements: {
            [TechColor.green]: 2
          },
          description:
            "<ul><li>After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li><li>Production 2</li><Ul>",
          provides: TechColor.black,
          edition: Edition.Base
        },
        {
          id: 2,
          name: "Bioplasmosis",
          requirements: {
            [TechColor.green]: 2
          },
          description:
            "At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems",
          provides: TechColor.green,
          edition: Edition.Base
        }
      ]
    },
    {
      id: 2,
      name: "Barony of Letnev",
      startingtech: [50, 38],
      edition: Edition.Base,
      tech: [
        {
          id: 3,
          name: "L4 Disruptors",
          requirements: {
            [TechColor.yellow]: 1
          },
          edition: Edition.Base,
          description:
            "During an invasion combat, units cannot use Space Canon against your units.",
          provides: TechColor.yellow
        },
        {
          id: 4,
          name: "Non-Euclidean Shielding",
          requirements: {
            [TechColor.red]: 2
          },
          edition: Edition.Base,
          description:
            "When 1 of your units uses Sustain Damage, cancel 2 hits.",
          provides: TechColor.red
        }
      ]
    },
    {
      id: 3,
      name: "Clan of Saar",
      startingtech: [50],
      edition: Edition.Base,
      tech: [
        {
          id: 5,
          name: "Floating Factory II",
          requirements: {
            [TechColor.yellow]: 2
          },
          edition: Edition.Base,
          provides: TechColor.black,
          description:
            "<ul><li>Saar Space Dock (Move 2, Capacity 5)</li><li>This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.</li><li>Production 7.</li></ul>"
        },
        {
          id: 6,
          name: "Chaos Mapping",
          requirements: {
            [TechColor.blue]: 1
          },
          edition: Edition.Base,
          provides: TechColor.blue,
          description:
            "<ul><li>Other players cannot activate asteroid fields that contain 1 or more of your ships.</li><li>At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.</li></ul>"
        }
      ]
    },
    {
      id: 4,
      name: "Embers of Muat",
      startingtech: [38],
      edition: Edition.Base,
      tech: [
        {
          id: 7,
          name: "Prototype War Sun II",
          edition: Edition.Base,
          requirements: {
            [TechColor.yellow]: 1,
            [TechColor.red]: 3
          },
          provides: TechColor.black,
          description:
            "<ul><li>Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)</li><li>Other player's units in this system lose Planetary Shield.</li><li>Sustain Damage; and, Bombardment 3[x3].</li></ul>"
        },
        {
          id: 8,
          name: "Magmus Reactor Ω",
          requirements: {
            [TechColor.red]: 2
          },
          provides: TechColor.red,
          edition: Edition.Base,
          description:
            "<ul><li>Your ships can move into superovas.</li><li>Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units.</li>"
        }
      ]
    },
    {
      id: 5,
      name: "Emirates of Hacan",
      startingtech: [50, 42],
      edition: Edition.Base,
      tech: [
        {
          id: 9,
          name: "Production Centers",
          edition: Edition.Base,
          requirements: {
            [TechColor.green]: 2
          },
          provides: TechColor.green,
          description:
            "ACTION: Exhaust this card and spend 1 CT from your Strategy Pool to gain 4 TGs and choose 1 other player; that player gains 2 TGs."
        },
        {
          id: 10,
          name: "Quantum Datahub Node",
          edition: Edition.Base,
          requirements: {
            [TechColor.yellow]: 3
          },
          provides: TechColor.yellow,
          description:
            "At the end of the Strategy Phase, you may spend 1 CT from your Strategy Pool and give another player 3 of your TGs. If you do, give 1 of your SCs to that player and take 1 of his SCs."
        }
      ]
    },
    {
      id: 6,
      name: "Federation of Sol",
      startingtech: [46, 50],
      edition: Edition.Base,
      tech: [
        {
          id: 11,
          name: "Spec Ops II",
          requirements: {
            [TechColor.green]: 2
          },
          provides: TechColor.black,
          edition: Edition.Base,
          description:
            "<ul><li>Sol Infantry (Cost 1/2; Combat 6)</li><li>After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your HS.</li></ul>"
        },
        {
          id: 12,
          name: "Advanced Carrier II",
          requirements: {
            [TechColor.blue]: 2
          },
          provides: TechColor.black,
          edition: Edition.Base,
          description:
            "<ul><li>Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)</li><li>Sustain Damage.</li></ul>"
        }
      ]
    },
    {
      id: 7,
      name: "Ghosts of Creuss",
      startingtech: [49],
      edition: Edition.Base,
      tech: [
        {
          id: 13,
          name: "Dimensional Splicer",
          requirements: {
            [TechColor.red]: 1
          },
          provides: TechColor.red,
          edition: Edition.Base,
          description:
            "At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."
        },
        {
          id: 14,
          name: "Wormhole Generator Ω",
          requirements: {
            [TechColor.blue]: 2
          },
          provides: TechColor.blue,
          edition: Edition.Base,
          description:
            "ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player´s ships."
        }
      ]
    },
    {
      id: 8,
      name: "L1z1x Mindnet",
      startingtech: [46, 38],
      edition: Edition.Base,
      tech: [
        {
          id: 15,
          name: "Super Dreadnought II",
          requirements: {
            [TechColor.blue]: 2,
            [TechColor.yellow]: 1
          },
          edition: Edition.Base,
          provides: TechColor.black,
          description:
            '<ul><li>L1Z1X Dreadnought (Cost 4; Combat 4; Move 2; Capacity 2)</li><li>This unit cannot be destroyed by "Direct Hit" action cards; Sustain Damage; and, Bombardment 4.</li></ul>'
        },
        {
          id: 16,
          name: "Inheritance Systems",
          edition: Edition.Base,
          requirements: {
            [TechColor.yellow]: 2
          },
          provides: TechColor.yellow,
          description:
            "You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites."
        }
      ]
    },
    {
      id: 9,
      name: "Mentak Coalition",
      startingtech: [38, 42],
      edition: Edition.Base,
      tech: [
        {
          id: 17,
          name: "Mirror Computing",
          requirements: {
            [TechColor.yellow]: 3
          },
          edition: Edition.Base,
          description:
            "When you spend TGs, each TG is worth 2 resources or influence.",
          provides: TechColor.yellow
        },
        {
          id: 18,
          name: "Salvage Operation",
          edition: Edition.Base,
          requirements: {
            [TechColor.yellow]: 2
          },
          description:
            "After you win or lose a space combat, gain 1 TG; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.",
          provides: TechColor.yellow
        }
      ]
    },
    {
      id: 10,
      name: "Naalu Collective",
      startingtech: [42, 46],
      edition: Edition.Base,
      tech: [
        {
          id: 19,
          name: "Neuroglaive",
          requirements: {
            [TechColor.green]: 3
          },
          edition: Edition.Base,
          provides: TechColor.green,
          description:
            "After another player activates a system that contains 1 or more of your ships, that player removes 1 CT from his Fleet Pool and returns it to his reinforcements."
        },
        {
          id: 20,
          name: "Hybrid Crystal Fighter II",
          requirements: {
            [TechColor.green]: 1,
            [TechColor.blue]: 1
          },
          edition: Edition.Base,
          provides: TechColor.black,
          description:
            "<ul><li>Naalu Fighter (Cost 1/2; Combat 7; Move 2)</li><li>This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.</li></ul>"
        }
      ]
    },
    {
      id: 11,
      name: "Nekro Virus",
      startingtech: [45],
      edition: Edition.Base,
      tech: [
        {
          id: 21,
          name: "Valefar Assimilator",
          requirements: {},
          provides: TechColor.black,
          edition: Edition.Base,
          description:
            'When you would gain another player\'s technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology\'s text. You cannot place an assimilator token on a technology that already has one.'
        },
        {
          id: 22,
          name: "Valefar Assimilator",
          requirements: {},
          provides: TechColor.black,
          edition: Edition.Base,
          description:
            'When you would gain another player\'s technology using 1 of your faction abilities, you may place either the "X" or "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, the corresponding "X" or "Y" card gains that technology\'s text. You cannot place an assimilator token on a technology that already has one.'
        }
      ]
    },
    {
      id: 12,
      name: "Sardakk N'orr",
      startingtech: [],
      edition: Edition.Base,
      tech: [
        {
          id: 23,
          name: "Exotrireme II",
          requirements: {
            [TechColor.blue]: 2,
            [TechColor.yellow]: 1
          },
          edition: Edition.Base,
          description:
            '<ul><li>N\'orr Dreadnought (Cost 4; Combat 5; Move 2; Capacity 1)</li><li>This unit cannot be destroyed by "Direct Hit" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system</li><li>Sustain Damage; and, Bombardment 4[x2].</li></ul>',
          provides: TechColor.black
        },
        {
          id: 24,
          name: "Valkyrie Particle Weave",
          requirements: {
            [TechColor.red]: 2
          },
          edition: Edition.Base,
          description:
            "After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.",
          provides: TechColor.red
        }
      ]
    },
    {
      id: 13,
      name: "Universities of Jol-Nar",
      startingtech: [46, 50, 38, 42],
      edition: Edition.Base,
      tech: [
        {
          id: 25,
          name: "Spacial Conduit Network",
          requirements: {
            [TechColor.blue]: 2
          },
          edition: Edition.Base,
          description:
            "You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",
          provides: TechColor.blue
        },
        {
          id: 26,
          name: "E-Res Siphons",
          requirements: {
            [TechColor.yellow]: 2
          },
          edition: Edition.Base,
          description:
            "After another player activates a system that contains 1 or more of your ships, gain 4 TGs.",
          provides: TechColor.yellow
        }
      ]
    },
    {
      id: 14,
      name: "Winnu",
      startingtech: [],
      edition: Edition.Base,
      tech: [
        {
          id: 27,
          name: "Hegemonic Trade Policy",
          requirements: {
            [TechColor.yellow]: 2
          },
          edition: Edition.Base,
          provides: TechColor.yellow,
          description:
            "Exhaust this card when 1 or more of your units use Production; swap the resource and influence values of 1 planet you control until the end of your turn."
        },
        {
          id: 28,
          name: "Lazax Gate Folding",
          requirements: {
            [TechColor.blue]: 2
          },
          edition: Edition.Base,
          provides: TechColor.blue,
          description:
            "<ul><li>During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole.</li><li>ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.</li></ul>"
        }
      ]
    },
    {
      id: 15,
      name: "Xxcha Kingdom",
      startingtech: [41],
      edition: Edition.Base,
      tech: [
        {
          id: 29,
          name: "Nullification Field",
          requirements: {
            [TechColor.yellow]: 2
          },
          edition: Edition.Base,
          provides: TechColor.yellow,
          description:
            "After another player activates a system that contains 1 or more or your ships, you may exhaust this card and spend 1 CT from your Strategy Pool; immediately end that player's turn."
        },
        {
          id: 30,
          name: "Instinct Training",
          requirements: {
            [TechColor.green]: 1
          },
          edition: Edition.Base,
          provides: TechColor.green,
          description:
            "You may exhaust this card and spend 1 CT from your Strategy Pool when another player plays an action card; cancel that action card."
        }
      ]
    },
    {
      id: 16,
      name: "Yin Brotherhood",
      startingtech: [42],
      edition: Edition.Base,
      tech: [
        {
          id: 31,
          name: "Impulse Core",
          requirements: {
            [TechColor.yellow]: 2
          },
          edition: Edition.Base,
          provides: TechColor.yellow,
          description:
            "At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of his non-fighter ships, if able."
        },
        {
          id: 32,
          name: "Yin Spinner",
          requirements: {
            [TechColor.green]: 2
          },
          edition: Edition.Base,
          provides: TechColor.green,
          description:
            "After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."
        }
      ]
    },
    {
      id: 17,
      name: "Yssaril Tribes",
      startingtech: [46],
      edition: Edition.Base,
      tech: [
        {
          id: 33,
          name: "Transparasteel Plating",
          requirements: {
            [TechColor.green]: 1
          },
          edition: Edition.Base,
          provides: TechColor.green,
          description:
            "During your turn of the action phase, players that have passed cannot play action cards."
        },
        {
          id: 34,
          name: "Mageon Implants",
          requirements: {
            [TechColor.green]: 3
          },
          edition: Edition.Base,
          provides: TechColor.green,
          description:
            "ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."
        }
      ]
    },
    {
      id: 18,
      name: "Argent Flight",
      startingtech: [],
      edition: Edition.PoK,
      tech: [
        {
          id: 68,
          name: "Aerie Hololattice",
          requirements: {
            [TechColor.yellow]: 1
          },
          edition: Edition.PoK,
          provides: TechColor.yellow,
          description:
            "Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit"
        },
        {
          id: 67,
          name: "Strike Wing Alpha II",
          requirements: {
            [TechColor.red]: 2
          },
          edition: Edition.PoK,
          provides: TechColor.black,
          description:
            '<ul><li>Argent Flight Destroyer (Cost 1; Combat 7; Move 2; Capacity 1)</li><li>Anti-Fighter Barrage 6(x3)</li><li>When this unit uses ANTI-FIGHTER BARRAGE, each result of 9 or 10 also destroys 1 of your opponent\'s infantry in the space area of the active system</li></ul>'
        }
      ]
    },
    {
      id: 19,
      name: "Empyrean",
      startingtech: [62],
      edition: Edition.PoK,
      tech: [
        {
          id: 69,
          name: "Aetherstream",
          requirements: { [TechColor.blue]: 2 },
          edition: Edition.PoK,
          provides: TechColor.blue,
          description:
            "After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action"
        },
        {
          id: 70,
          name: "Voidwatch",
          requirements: {
            [TechColor.green]: 1
          },
          edition: Edition.PoK,
          provides: TechColor.green,
          description:
            "After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able"
        }
      ]
    },
    {
      id: 20,
      name: "Mahact Gene-Sorcerers",
      startingtech: [67, 61],
      edition: Edition.PoK,
      tech: [
        {
          id: 71,
          name: "Genetic Recombination",
          requirements: { [TechColor.green]: 1 },
          edition: Edition.PoK,
          provides: TechColor.green,
          description:
            "You may exhaust this card before a player casts votes; that player must cast at least 1 vote for an outcome of your choice or remove 1 token from their fleet pool and return it to their reinforcements"
        },
        {
          id: 72,
          name: "Crimson Legionnaire II",
          requirements: {
            [TechColor.green]: 2
          },
          edition: Edition.PoK,
          provides: TechColor.black,
          description:
            '<ul><li>Mahact Ground Force (Cost 1x2; Combat 7)</li><li>After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system</li></ul>'
        }
      ]
    },
    {
      id: 21,
      name: "Naaz-Rokha Alliance",
      startingtech: [64, 60],
      edition: Edition.PoK,
      tech: [
        {
          id: 73,
          name: "Supercharge",
          requirements: { [TechColor.red]: 1 },
          edition: Edition.PoK,
          provides: TechColor.red,
          description:
            "At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your unit's combat rolls during this combat round"
        },
        {
          id: 74,
          name: "Pre-Fab Arcologies",
          requirements: {
            [TechColor.green]: 3
          },
          edition: Edition.PoK,
          provides: TechColor.green,
          description:
            'After you explore a planet, ready that planet'
        }
      ]
    },
    {
      id: 22,
      name: "Nomad",
      startingtech: [63],
      edition: Edition.PoK,
      tech: [
        {
          id: 75,
          name: "Temporal Command Suite",
          requirements: { [TechColor.yellow]: 1 },
          edition: Edition.PoK,
          provides: TechColor.yellow,
          description:
            "After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player"
        },
        {
          id: 76,
          name: "Memoria II",
          requirements: {
            [TechColor.green]: 1,
            [TechColor.blue]: 1,
            [TechColor.yellow]: 1
          },
          edition: Edition.PoK,
          provides: TechColor.black,
          description:
            '<ul><li>Nomad Flagship (Cost 8; Combat 5(x2); Move 2; Capacity 6)</li><li>Sustain Damage</li><li>Anti-Fighter Barrage 5(x3)</li><li>You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.</li></ul>'
        }
      ]
    },
    {
      id: 23,
      name: "Titans of Ul",
      startingtech: [50, 66],
      edition: Edition.PoK,
      tech: [
        {
          id: 76,
          name: "Saturn Engine II",
          requirements: { [TechColor.green]: 1, [TechColor.yellow]: 1, [TechColor.red]: 1 },
          edition: Edition.PoK,
          provides: TechColor.black,
          description:
            '<ul><li>Titan Cruiser (Cost 2; Combat 6; Move 3; Capacity 2)</li><li>Sustain Damage</li></ul>'
        },
        {
          id: 77,
          name: "Hel Titan II",
          requirements: {
            [TechColor.red]: 1,
            [TechColor.yellow]: 1
          },
          edition: Edition.PoK,
          provides: TechColor.black,
          description:
            '<ul><li>Titan PDS (Combat 6)</li><li>Planetary Shield</li><li>Space Cannon 5</li><li>Sustain Damage</li><li>Production 1</li><li>This unit is treated as both a structure and a ground force. It cannot be transported.</li><li>You may use this unit\'s SPACE CANNON against ships that are adjacent to this unit\'s system.</li></ul>'
        }
      ]
    },
    {
      id: 24,
      name: "Vuil'Raith Cabal",
      startingtech: [65],
      edition: Edition.PoK,
      tech: [
        {
          id: 78,
          name: "Vortex",
          requirements: { [TechColor.red]: 1 },
          edition: Edition.PoK,
          provides: TechColor.red,
          description:
            'ACTION: Exhaust this card to choose another player\'s non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player\'s reinforcements'
        },
        {
          id: 79,
          name: "Dimensional Tear II",
          requirements: {
            [TechColor.yellow]: 2
          },
          edition: Edition.PoK,
          provides: TechColor.black,
          description:
            '<ul><li>Cabal Space Dock(PRODUCTION 7)</li><li>This system is a gravity rift; your ships do not roll for this gravity rift.</li><li>Place a dimensional tear token beneath this unit as a reminder</li><li>Up to 12 fighters in this system do not count against your ships\' capacity.</li></ul>'
        }
      ]
    }
  ],
  genericTech: [
    {
      id: 35,
      name: "Assault Cannon",
      requirements: { [TechColor.red]: 3 },
      edition: Edition.Base,
      description:
        "At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.",
      provides: TechColor.red
    },
    {
      id: 36,
      edition: Edition.Base,
      name: "Duranium Armor",
      requirements: { [TechColor.red]: 2 },
      description:
        "During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round.",
      provides: TechColor.red
    },
    {
      id: 37,
      edition: Edition.Base,
      name: "Magen Defense Grid Ω",
      requirements: { [TechColor.red]: 1 },
      description:
        "At the start of ground combat on a planet that contains 1 or more of your structures, you may produce 1 hit and assign it to 1 of your opponent´s ground forces.",
      provides: TechColor.red
    },
    {
      id: 38,
      edition: Edition.Base,
      name: "Plasma Scoring",
      requirements: {},
      description:
        "When 1 or more of your unit use Bombardment or Space Canon, 1 of those units may roll 1 additional die.",
      provides: TechColor.red
    },
    {
      id: 39,
      edition: Edition.Base,
      name: "Integrated Economy",
      requirements: { [TechColor.yellow]: 3 },
      description:
        "After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet’s resource value.",
      provides: TechColor.yellow
    },
    {
      id: 40,
      edition: Edition.Base,
      name: "Transit Diodes",
      requirements: { [TechColor.yellow]: 2 },
      description:
        "You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your GFs from the game board and place them on 1 or more planets you control.",
      provides: TechColor.yellow
    },
    {
      id: 41,
      edition: Edition.Base,
      name: "Graviton Laser Systems",
      requirements: { [TechColor.yellow]: 1 },
      description:
        "You may exhaust this card before 1 or of your units use Space Cannon; hits produced by those units must be assigned to non-fighter ships if able.",
      provides: TechColor.yellow
    },
    {
      id: 42,
      edition: Edition.Base,
      name: "Sarween Tools",
      requirements: {},
      description:
        "When 1 or more of your units use Production, reduce the combined cost of the produced units by 1.",
      provides: TechColor.yellow
    },
    {
      id: 43,
      edition: Edition.Base,
      name: "X-89 Bacterial Weapon Ω",
      requirements: { [TechColor.green]: 3 },
      description:
        "After 1 or more of your units use BOMBARDMENT against a planet, if at least 1 of your opponent´s infantry was destroyed, you may destroy all of your opponent´s infantry on that planet.",
      provides: TechColor.green
    },
    {
      id: 44,
      edition: Edition.Base,
      name: "Hyper Methabolism",
      requirements: { [TechColor.green]: 2 },
      description: "During the status phase, gain 3 CTs instead of 2.",
      provides: TechColor.green
    },
    {
      id: 45,
      edition: Edition.Base,
      name: "Dacxive Animators",
      requirements: { [TechColor.green]: 1 },
      description:
        "After you win an ground combat, you may place 1 infantry from your reinforcements on the planet.",
      provides: TechColor.green
    },
    {
      id: 46,
      edition: Edition.Base,
      name: "Neural Motivator",
      requirements: {},
      description: "During the Status Phase, draw 2 action cards instead of 1.",
      provides: TechColor.green
    },
    {
      id: 47,
      edition: Edition.Base,
      name: "Light / Wave Deflector",
      requirements: { [TechColor.blue]: 3 },
      description:
        "Your ships can move through systems that contain other players’ ships.",
      provides: TechColor.blue
    },
    {
      id: 48,
      edition: Edition.Base,
      name: "Fleet Logistics",
      requirements: { [TechColor.blue]: 2 },
      description:
        "During each of your turn of the Action Phase, you may perform 2 actions instead of 1.",
      provides: TechColor.blue
    },
    {
      id: 49,
      edition: Edition.Base,
      name: "Gravity Drive",
      requirements: { [TechColor.blue]: 1 },
      description:
        "You After you activate a system, apply +1 to the move value of 1 of your ships during the Tactical Action.",
      provides: TechColor.blue
    },
    {
      id: 50,
      edition: Edition.Base,
      name: "Antimass Deflectors",
      requirements: {},
      description:
        "Your ships can move through and into Asteroid Fields. When other players’ units use Space Canon against your units, apply -1 to the result of each die roll.",
      provides: TechColor.blue
    },
    {
      id: 51,
      edition: Edition.Base,
      name: "War Sun",
      requirements: { [TechColor.red]: 3, [TechColor.yellow]: 1 },
      description:
        "<ul><li>Cost 12; Battle 3[x3]; Move 2; Capacity 6</li><li>Other players’ units in this system lose Planetary Shield</li><li>Sustain Damage</li><li>Bombardment 3[x3].</li></ul>",
      provides: TechColor.black
    },
    {
      id: 52,
      edition: Edition.Base,
      name: "Dreadnought II",
      requirements: { [TechColor.blue]: 2, [TechColor.yellow]: 1 },
      description:
        "<ul><li>Cost 4; Battle 5; Move 2; Capacity 1</li><li>This unit cannot be destroyed by the “Direct Hit” action cards</li><li>Sustain Damage</li><li>Bombardment 5</li></ul>",
      provides: TechColor.black
    },
    {
      id: 53,
      edition: Edition.Base,
      name: "Cruiser II",
      requirements: {
        [TechColor.red]: 1,
        [TechColor.yellow]: 1,
        [TechColor.green]: 1
      },
      description: "Cost 2; Battle 6; Move 3; Capacity 1",
      provides: TechColor.black
    },
    {
      id: 54,
      edition: Edition.Base,
      name: "Destroyer II",
      requirements: { [TechColor.red]: 2 },
      description:
        "<ul><li>Cost 1; Battle 8; Move 2</li><li>Anti-fighter barrage 6[x3].</li></ul>",
      provides: TechColor.black
    },
    {
      id: 55,
      edition: Edition.Base,
      name: "PDS II",
      requirements: { [TechColor.red]: 1, [TechColor.yellow]: 1 },
      description:
        "<ul><li>You may use this unit’s Space Canon against ships that are adjacent to this system</li><li>Planetary Shield</li><li>Space Cannon 5</li></ul>",
      provides: TechColor.black
    },
    {
      id: 56,
      edition: Edition.Base,
      name: "Carrier II",
      requirements: { [TechColor.blue]: 2 },
      description: "Cost 3; Battle 9; Move 2; Capacity 6",
      provides: TechColor.black
    },
    {
      id: 57,
      edition: Edition.Base,
      name: "Fighter II",
      requirements: { [TechColor.blue]: 1, [TechColor.green]: 1 },
      description:
        "<ul><li>Cost 1/2; Battle 8; Move 2</li><li>This unit may move without being transported. Fighters in excess of your ships’ capacity count against your fleet pool.</li></ul>",
      provides: TechColor.black
    },
    {
      id: 58,
      edition: Edition.Base,
      name: "Infantry II",
      requirements: { [TechColor.green]: 2 },
      description:
        "<ul><li>Cost 1/2; Battle 7</li><li>After this unit is destroyed, roll 1 die. If result ≥ 6: place the unit on this card. At the start of your next turn, place each unit on this card on a planet you control in your HS.</li></ul>",
      provides: TechColor.black
    },
    {
      id: 59,
      edition: Edition.Base,
      name: "Space Dock II",
      requirements: { [TechColor.yellow]: 2 },
      description:
        "<ul><li>This unit’s Production value is equal to 4 more than the resource value of this planet</li><li>Up to 3 fighters in this system do not count toward your ships’ capacity</li><li>Production X.</li></ul>",
      provides: TechColor.black
    },
    {
      id: 60,
      edition: Edition.PoK,
      name: "Psychoarchaeology",
      requirements: {},
      description:
        "<ul><li>You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted</li><li>During the Action Phase, you can exhaust planets you control that have technology specialties to gain 1 Trade Good</li></ul>",
      provides: TechColor.green
    },
    {
      id: 61,
      edition: Edition.PoK,
      name: "Bio-Stims",
      requirements: { [TechColor.green]: 1 },
      description:
        "<ul><li>You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies</li></ul>",
      provides: TechColor.green
    },
    {
      id: 62,
      edition: Edition.PoK,
      name: "Dark Energy Tap",
      requirements: {},
      description:
        "<ul><li>After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token</li><li>Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system.</li></ul>",
      provides: TechColor.blue
    },
    {
      id: 63,
      edition: Edition.PoK,
      name: "Sling Relay",
      requirements: { [TechColor.blue]: 1 },
      description:
        "<ul><li>ACTION: Exhaust this card to produce 1 ship in any system that contains one of your space docks</li></ul>",
      provides: TechColor.blue
    },
    {
      id: 64,
      edition: Edition.PoK,
      name: "AI Development Algorithm",
      requirements: {},
      description:
        "<ul><li>When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite</li><li>When 1 or more of your units use Production, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own</li></ul>",
      provides: TechColor.red
    },
    {
      id: 65,
      edition: Edition.PoK,
      name: "Self Assembly Routines",
      requirements: { [TechColor.red]: 1 },
      description:
        "<ul><li>After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system</li><li>After 1 of your mechs is destroyed, gain 1 trade good</li></ul>",
      provides: TechColor.red
    },
    {
      id: 66,
      edition: Edition.PoK,
      name: "Scanlink Drone Network",
      requirements: {},
      description:
        "<ul><li>When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units</li></ul>",
      provides: TechColor.yellow
    },
    {
      id: 67,
      edition: Edition.PoK,
      name: "Predictive Intelligence",
      requirements: { [TechColor.yellow]: 1 },
      description:
        "<ul><li>At the end of your turn, you may exhaust this card to redistribute your command tokens</li><li>When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card</li></ul>",
      provides: TechColor.yellow
    }
  ]
};
