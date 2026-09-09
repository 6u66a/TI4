export const PLANET_TRAITS = {
    "HAZARDOUS": "hazardous",
    "INDUSTRIAL": "industrial",
    "CULTURAL": "cultural",
    "NONE": null
};

export const TECH_SPECIALTIES = {
    "BIOTIC": "biotic",
    "WARFARE": "warfare",
    "PROPULSION": "propulsion",
    "CYBERNETIC": "cybernetic",
    "NONE": null
};

export const ANOMALIES = {
    "NEBULA": "nebula",
    "GRAVITY_RIFT": "gravity-rift",
    "ASTEROID_FIELD": "asteroid-field",
    "SUPERNOVA": "supernova",
};

export const WORMHOLES = {
    "ALPHA": "alpha",
    "BETA": "beta",
    "GAMMA": "gamma",
    "DELTA": "delta"
};

export const EXPANSIONS = {
    "POK": "Prophecy of Kings"
}

export const WORMHOLE_SYMBOLS = Object.fromEntries([
    [WORMHOLES.ALPHA, "α"],
    [WORMHOLES.BETA, "β"],
    [WORMHOLES.GAMMA, "γ"],
    [WORMHOLES.DELTA, "δ"]
])

const tileData = {
    "all": {
        "1": {
            "type": "green",
            "race": "The Federation of Sol",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Jord",
                    "resources": 4,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "2": {
            "type": "green",
            "race": "The Mentak Coalition",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Moll Primus",
                    "resources": 4,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "3": {
            "type": "green",
            "race": "The Yin Brotherhood",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Darien",
                    "resources": 4,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "4": {
            "type": "green",
            "race": "The Embers of Muaat",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "resources": 4,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "5": {
            "type": "green",
            "race": "The Arborec",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Nestphar",
                    "resources": 3,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "6": {
            "type": "green",
            "race": "The Lizix Mindnet",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "[0.0.0]",
                    "resources": 5,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "7": {
            "type": "green",
            "race": "The Winnu",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Winnu",
                    "resources": 3,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "8": {
            "type": "green",
            "race": "The Nekro Virus",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Mordai II",
                    "resources": 4,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "9": {
            "type": "green",
            "race": "The Naalu Collective",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Maaluuk",
                    "resources": 2,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Druaa",
                    "resources": 3,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "10": {
            "type": "green",
            "race": "The Barony of Letnev",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Arc Prime",
                    "resources": 4,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Wren Terra",
                    "resources": 2,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "11": {
            "type": "green",
            "race": "The Clan of Saar",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Lisis II",
                    "resources": 1,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Ragh",
                    "resources": 2,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "12": {
            "type": "green",
            "race": "The Universities of Jol-Nar",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Nar",
                    "resources": 2,
                    "influence": 3,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Jol",
                    "resources": 1,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "13": {
            "type": "green",
            "race": "Sardakk N'orr",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Tren'lak",
                    "resources": 1,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Quinarra",
                    "resources": 3,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "14": {
            "type": "green",
            "race": "The Xxcha Kingdom",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Archon Ren",
                    "resources": 2,
                    "influence": 3,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Archon Tau",
                    "resources": 1,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "15": {
            "type": "green",
            "race": "The Yssaril Tribes",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Retillion",
                    "resources": 2,
                    "influence": 3,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Shalloq",
                    "resources": 1,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "16": {
            "type": "green",
            "race": "The Emirates of Hacan",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Arretze",
                    "resources": 2,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Hercant",
                    "resources": 1,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Kamdorn",
                    "resources": 0,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "17": {
            "type": "green",
            "race": "The Ghosts of Creuss",
            "wormhole": ["delta"],
            "anomaly": [],
            "planets": []
        },
        "18": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "special": true,
            "planets": [
                {
                    "name": "Mecatol Rex",
                    "resources": 1,
                    "influence": 6,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "19": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Wellon",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": "cybernetic",
                    "legendary": false
                }
            ]
        },
        "20": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Vefut II",
                    "resources": 2,
                    "influence": 2,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "21": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Thibah",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "22": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Tar'mann",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "biotic",
                    "legendary": false
                }
            ]
        },
        "23": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Saudor",
                    "resources": 2,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "24": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Mehar Xull",
                    "resources": 1,
                    "influence": 3,
                    "trait": "hazardous",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "25": {
            "type": "blue",
            "wormhole": ["beta"],
            "anomaly": [],
            "planets": [
                {
                    "name": "Quann",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "26": {
            "type": "blue",
            "wormhole": ["alpha"],
            "anomaly": [],
            "planets": [
                {
                    "name": "Lodor",
                    "resources": 3,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "27": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "New Albion",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "biotic",
                    "legendary": false
                },
                {
                    "name": "Starpoint",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "28": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Tequ'ran",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Torkan",
                    "resources": 0,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "29": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Qucen'n",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rarron",
                    "resources": 0,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "30": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Mellon",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Zohbat",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "31": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Lazar",
                    "resources": 1,
                    "influence": 0,
                    "trait": "industrial",
                    "specialty": "cybernetic",
                    "legendary": false
                },
                {
                    "name": "Sakulag",
                    "resources": 2,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "32": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Dal Bootha",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Xxehan",
                    "resources": 1,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "33": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Corneeq",
                    "resources": 1,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Resulon",
                    "resources": 2,
                    "influence": 0,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "34": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Centauri",
                    "resources": 1,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Gral",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "35": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Bereg",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Lirta IV",
                    "resources": 2,
                    "influence": 3,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "36": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Arnor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Lor",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "37": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Arinam",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Meer",
                    "resources": 0,
                    "influence": 4,
                    "trait": "hazardous",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "38": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Abyz",
                    "resources": 3,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Fria",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "39": {
            "type": "red",
            "wormhole": ["alpha"],
            "anomaly": [],
            "planets": [
            ]
        },
        "40": {
            "type": "red",
            "wormhole": ["beta"],
            "anomaly": [],
            "planets": [
            ]
        },
        "41": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["gravity-rift"],
            "planets": [
            ]
        },
        "42": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["nebula"],
            "planets": [
            ]
        },
        "43": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["supernova"],
            "planets": [
            ]
        },
        "44": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["asteroid-field"],
            "planets": [
            ]
        },
        "45": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["asteroid-field"],
            "planets": [
            ]
        },
        "46": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "47": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "48": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "49": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "50": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "51": {
            "type": "green",
            "wormhole": "delta",
            "planets": [
                {
                    "name": "Creuss",
                    "resources": 4,
                    "influence": 2,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "52": {
            "type": "green",
            "race": "The Mahact Gene-sorcerers",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Ixth",
                    "resources": 3,
                    "influence": 5,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "53": {
            "type": "green",
            "race": "The Nomad",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Arcturus",
                    "resources": 4,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "54": {
            "type": "green",
            "race": "The Vuil'raith Cabal",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Acheron",
                    "resources": 4,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "55": {
            "type": "green",
            "race": "The Titans of Ul",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Elysium",
                    "resources": 4,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "56": {
            "type": "green",
            "race": "The Empyrean",
            "wormhole": [],
            "anomaly": [ANOMALIES.NEBULA],
            "planets": [
                {
                    "name": "The Dark",
                    "resources": 3,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "57": {
            "type": "green",
            "race": "The Naaz-Rokha Alliance",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Naazir",
                    "resources": 2,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rokha",
                    "resources": 1,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "58": {
            "type": "green",
            "race": "The Argent Flight",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Valk",
                    "resources": 2,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Avar",
                    "resources": 1,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Ylir",
                    "resources": 0,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "59": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Archon Vail",
                    "resources": 1,
                    "influence": 3,
                    "trait": "hazardous",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "60": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Perimeter",
                    "resources": 2,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "61": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Ang",
                    "resources": 2,
                    "influence": 0,
                    "trait": "industrial",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "62": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Sem-Lore",
                    "resources": 3,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "cybernetic",
                    "legendary": false
                }
            ]
        },
        "63": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Vorhal",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "biotic",
                    "legendary": false
                }
            ]
        },
        "64": {
            "type": "blue",
            "wormhole": ["beta"],
            "anomaly": [],
            "planets": [
                {
                    "name": "Atlas",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "65": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Primor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "ability": "The Atrament - You may exhaust this card at the end of your turn to place up to 2 infantry from your reinforcements on any planet you control.",
                    "legendary": true
                }
            ]
        },
        "66": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Hope's End",
                    "resources": 3,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "ability": "Imperial Arms Vault - You may exhaust this card at the end of your turn to place 1 mech from your reinforcements on any planet you control, or draw 1 action card.",
                    "legendary": true
                }
            ]
        },
        "67": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["gravity-rift"],
            "planets": [
                {
                    "name": "Cormund",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "68": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["nebula"],
            "planets": [
                {
                    "name": "Everra",
                    "resources": 3,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "69": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Accoen",
                    "resources": 2,
                    "influence": 3,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Jeol Ir",
                    "resources": 2,
                    "influence": 3,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "70": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Kraag",
                    "resources": 2,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Siig",
                    "resources": 0,
                    "influence": 2,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "71": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Ba'Kal",
                    "resources": 3,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Alio Prima",
                    "resources": 1,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "72": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Lisis",
                    "resources": 2,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Velnor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "73": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Lisis",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "cybernetic",
                    "legendary": false
                },
                {
                    "name": "Xanhact",
                    "resources": 0,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "74": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Vega Major",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Vega Minor",
                    "resources": 1,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "75": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Loki",
                    "resources": 1,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Abaddon",
                    "resources": 1,
                    "influence": 0,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Ashtroth",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "76": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Rigel I",
                    "resources": 0,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rigel II",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rigel III",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "biotic",
                    "legendary": false
                }
            ]
        },
        "77": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "78": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "79": {
            "type": "red",
            "wormhole": ["alpha"],
            "anomaly": ["asteroid-field"],
            "planets": [
            ]
        },
        "80": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["supernova"],
            "planets": [
            ]
        },
        "81": {
            "type": "red",
            "special": true,
            "wormhole": [],
            "anomaly": ["muaat-supernova"],
            "planets": [
            ]
        },
        "82": {
            "type": "blue",
            "special": true,
            "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA, WORMHOLES.GAMMA],
            "planets": [
                {
                    "name": "Mallice",
                    "resources": 0,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": true
                }
            ]
        },
    },

    "base": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
        "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
        "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43",
        "44", "45", "46", "47", "48", "49", "50", "51"
    ],
    "pok": [
        "52", "53", "54", "55", "56", "57", "58", "59", "60",
        "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
        "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
        "81", "82"
    ],
}

export default tileData