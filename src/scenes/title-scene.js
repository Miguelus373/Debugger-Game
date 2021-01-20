import Phaser from 'phaser';
import createButton from '../helpers/buttons';
import getWords from '../helpers/get-words';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // retrieve data from the words api
    this.apiData = getWords();

    // show name input
    this.nameInput = document.querySelector('.name-input');
    this.nameInput.classList.toggle('hidden');

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
            this.nameInput.classList.toggle('hidden');
            this.scene.start('Instructions');
            break;
          case 'Leaderboard':
            this.nameInput.classList.toggle('hidden');
            this.scene.start('Leaderboard');
            break;
          default:
            this.nameInput.classList.toggle('hidden');
            this.apiData
              .then(data => {
                localStorage.setItem('words', JSON.stringify(data));
                this.scene.start('Game');
              });
        }
      }
    });
  }
}