import Phaser from '../phaser.min';
import releaseBug from '../helpers/release-bug';
import keyCombo from '../helpers/key-combo';
import bugDestroy from '../helpers/bug-destroy';
import addColliders from '../helpers/add-colliders';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.bugNames = JSON.parse(localStorage.getItem('words'));

    // set background and base
    this.add.image(350, 320, 'background').setDisplaySize(700, 640);
    this.add.image(350, 590, 'base').setScale(0.15);

    this.turret = this.physics.add.image(350, 575, 'turret')
      .setScale(0.15);

    // create animation for bugs
    this.anims.create({
      key: 'go',
      frames: this.anims.generateFrameNumbers('bugSprite', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1,
    });

    // release bugs and creates keycombos
    this.activeBugs = releaseBug(5, this.bugNames, this);
    keyCombo(this.activeBugs, this);

    // destroy bug with the keycombo name
    this.input.keyboard.on('keycombomatch', (keyCombo) => {
      bugDestroy(keyCombo.keyCodes,
        this.children.list,
        Phaser.Input.Keyboard.KeyCodes);

      this.activeBugs.pop();
    });

    // set colliders between bugs and turret
    addColliders(this.turret, this.children.list, this.gameOver, this);
  }

  update() {
    // release more bugs when screen is cleared
    if (this.activeBugs.length === 0) {
      this.activeBugs = releaseBug(5, this.bugNames, this);
      addColliders(this.turret, this.children.list, this.gameOver, this);
      keyCombo(this.activeBugs, this);
    }
  }

  gameOver() {
    this.physics.pause();
    this.input.keyboard.enabled = false;
  }
}