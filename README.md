# Siggis TI4 Buddy

A small Angular web application with useful tools for **Twilight Imperium 4**.

## Features

- **Tech Helper**: Helps you decide on your Tech-Path during play
- **Slice Generator**: Generate random slices for 4 to 6 players with the base game, or up to 8 players when **Prophecy of Kings** and/or **Thunder's Edge** is enabled
- **Draft**: Drafting system for faction, position and slice
- **Settings**: Select available editions and manage application settings

Game data is stored in [src/app/data/data.ts](src/app/data/data.ts), including factions, technologies, and system tiles.

## Requirements

- Node.js and npm

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser. The application reloads automatically when source files change.

## Routes

| Route | Area |
| --- | --- |
| `/` | Home |
| `/tech` | Tech Helper |
| `/draft` | Faction Draft |
| `/slice` | Slice Generator |
| `/settings` | Settings |

## Build and Tests

Create a production build:

```bash
npm run build
```

Build artifacts are written to the `dist/` directory.

Run unit tests:

```bash
npm test
```

Tests use [Karma](https://karma-runner.github.io).

## Angular CLI

This project uses [Angular](https://angular.dev/) and Angular CLI 22.1.3. Run `npx ng help` for additional CLI commands.

## Attribution

*Twilight Imperium 4* was published by Fantasy Flight Games. *Twilight Imperium*, its names, logos, artwork, and related intellectual property belong to Fantasy Flight Games and/or their respective rights holders. This project is unofficial and is not affiliated with or endorsed by Fantasy Flight Games.

The race and technology icons used in this project are sourced from the work shared by BoardGameGeek user [Polarstern](https://boardgamegeek.com/profile/Polarstern):

[TI4 Race and Tech Symbols - Vectorized](https://boardgamegeek.com/filepage/180049/ti4-race-and-tech-symbols-vectorized)
