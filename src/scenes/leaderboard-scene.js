import Phaser from '../phaser.min';
import createButton from '../helpers/buttons';
import loadScoreboard from '../helpers/load-scoreboard';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    // retrive score data from the api
    const scores = [
      {
        user: 'Karen Page',
        score: 93,
      },
      {
        user: 'Jessica Jones',
        score: 67,
      },
      {
        user: 'Danny Rand',
        score: 50,
      },
      {
        user: 'Luke Cage',
        score: 27,
      },
      {
        user: 'Matt Murdock',
        score: 5,
      },
    ];

    // set background and logo
    this.add.image(350, 320, 'background')
      .setDisplaySize(700, 640);

    this.add.image(345, 70, 'logo')
      .setScale(0.27);

    loadScoreboard(scores, this);

    createButton(350, 580, 'Main Menu', this);

    this.input.mouse.disableContextMenu();
    this.input.on('pointerdown', (pointer, gameObjects) => {
      if (pointer.leftButtonDown() && gameObjects.length > 0) {
        if (gameObjects[0].last.text === 'Main Menu') {
          this.scene.start('Title');
        }
      }
    });
  }
}