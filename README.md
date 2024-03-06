# Boulder Bingo

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#screenshot">Screenshot</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#how-to-play">How To Play</a>
    </li>
    <li>
      <a href="#tech-stack">Tech Stack</a>
    </li>
    <li>
    <a href="#setup">Setup</a>
    </li>
    <li>
    <a href="#project-directory-structure">Project Directory</a>
    </li>
  </ol>
</details>


## Screenshot

![boulder](https://github.com/mikedaltonmtl/Boulder-Bingo/assets/109972253/ff2d8777-c260-4caf-8934-faa922e312e7)


## About

My son and youngest daughter have joined a bouldering club. We've been going regularly for the past few months, and they've been improving steadily.

However, the other week they were lacking motivation... until they were given Bingo cards.

What a difference it made! Immediately, they were racing to check off their challenges, just to be the first to shout 'House!'. The other climbers may have looked at us as though we were a little crazy, but it was a lot of fun.

In the interest of keeping them motivated to climb, getting me motivated to practice using Material-UI, and saving some trees along the way, I decided to build a little phone app to create on-line bingo cards.

If your kids climb, or maybe you do (the difficulty of the challenges is customizable), you can give it a try at [boulderbingo.vercel.app](https://boulderbingo.vercel.app/).


## How To Play

Once you've hit the `START` button to close the splash screen, you'll be taken to the `SETTINGS` page.

Here you can customize your Bingo card:

- `Challenges`: Choose how many challenges you'd like to be added to the card, 8, 12 or 16.
- `Colours`: Use the toggles to add routes by their colour.
- `Climb all the Intros`: Include a challenge to complete each of the intro runs.
- `Exercises`: Choose some exercises to do between climbs.
- `Difficulty`: Use the slider to select the range of difficulty for the climbs that will appear on your card.

The challenges are added randomly to the bingo card. For example, if you've chosen a card with 8 challenges and included all 11 elements in addition to a range of difficulty; 5 climbs from the difficulty range will be created, then 8 of the 16 elements will be randomly picked for the bingo card.

When you tap the `LET'S GO` button at the bottom of the `SETTINGS` page, the app will create a bingo card for you.

Underneath the bingo card is a menu with three buttons:
- `Settings`: Returns you to the settings page to redefine your challenges. Any progress made on the bingo card will be lost.
- `Shuffle`: Resets the bingo card with newly randomized challenges.
- `Restart`: Unchecks any squares on the card that have been checked off.

Once the card is complete (Well Done!), you'll see a Bingo animation. If you'd like to play again, use the menu at the bottom of the page to decide how.


## Tech Stack

- Next
- React
- Node.js
- Material-UI
- Redux Toolkit
- Framer-Motion


## Setup

Fork or Clone the project from the GitHub repository.

Install dependencies with `> npm install`.

Run the development server using `> npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser and go climbing!


## Project Directory

boulder-bingo
├──  app
│   ├── components
│   │   ├── game
│   │   │   ├── BingoCard.jsx
│   │   │   ├── Challenge.jsx
│   │   │   └── NavBar.jsx
│   │   └── settings
│   │   │   ├── Items.jsx
│   │   │   │   ├── Challenges.jsx
│   │   │   │   ├── Climbs.jsx
│   │   │   │   ├── Colours.jsx
│   │   │   │   ├── ColourSwitches.jsx
│   │   │   │   ├── Exercises.jsx
│   │   │   │   └── Intros.jsx
│   │   │   ├── ListItems.jsx
│   │   │   ├── Stepper.jsx
│   │   │   └── TemporaryDrawer.jsx
│   │   └── Splash.jsx
│   ├── helpers
│   │   ├── conversions.js
│   │   └── setCardArray.js
│   ├── theme
│   │   └── theme.js
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── page.module.css
└── redux
    ├── features
    │   └── setting-slice.js
    ├── provider.jsx
    └── store.js
