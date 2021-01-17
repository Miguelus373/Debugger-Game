import Phaser from '../phaser.min';
import createButton from '../helpers/buttons';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // set background, decoration and logo
    this.add.image(350, 320, 'titleBackground')
      .setDisplaySize(700, 640);

    this.add.image(345, 300, 'logo')
      .setScale(0.27);

    this.add.image(650, 590, 'titleBug')
      .setScale(0.4)
      .rotation = -16.5;

    // create buttons
    createButton(350, 440, 'Start Game', this);
    createButton(350, 510, 'Instructions', this);
    createButton(350, 580, 'Leaderboard', this);

    this.input.mouse.disableContextMenu();
    this.input.on('pointerdown', (pointer, gameObjects) => {
      if (pointer.leftButtonDown() && gameObjects.length > 0) {
        switch (gameObjects[0].last.text) {
          case 'Instructions':
            this.scene.start('Instructions');
            break;
          case 'Leaderboard':
            this.scene.start('Leaderboard');
            break;
          default:
            this.scene.start('Game');
        }
      }
    });
  }
}