import Phaser from '../phaser.min';
import createButton from '../helpers/buttons';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    // set background and logo
    this.add.image(350, 320, 'background')
      .setDisplaySize(700, 640);

    this.add.image(345, 70, 'logo')
      .setScale(0.27);

    this.add.image(300, 195, 'bugSprite')
      .setScale(0.2);
    this.add.image(400, 250, 'bugSprite')
      .setScale(0.2);

    this.add.text(260, 135, 'Troyan', {
      fontSize: '20px',
      fill: '#0f0',
    });
    this.add.text(365, 190, 'Virus', {
      fontSize: '20px',
      fill: '#0f0',
    });

    this.add.graphics()
      .fillStyle(0x222222, 0.6)
      .fillRect(50, 330, 600, 165);

    const instructions = ` Bugs are trying to infect your system!\n
Use your keyboard to type the word on top\n
   of them to shoot and destroy them!`;

    this.add.text(80, 350, instructions, {
      fontSize: '22px',
      fill: '#fff',
    });

    // create buttons
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