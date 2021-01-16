import Phaser from '../phaser.min';
import releaseBug from '../helpers/release-bug';
import keyCombo from '../helpers/key-combo';
import bugDestroy from '../helpers/bug-destroy';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.image(350, 320, 'background').setDisplaySize(700, 640);
    this.add.image(350, 590, 'base').setScale(0.15);

    const turret = this.add.image(350, 575, 'turret');
    turret.setScale(0.15);

    this.anims.create({
      key: 'go',
      frames: this.anims.generateFrameNumbers('bugSprite', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1,
    });

    this.activeBugs = releaseBug(5, this);

    keyCombo(this.activeBugs, this);

    this.input.keyboard.on('keycombomatch', (keyCombo) => {
      bugDestroy(keyCombo.keyCodes,
        this.children.list,
        Phaser.Input.Keyboard.KeyCodes);

      // Display turret motion
      // Display explotions
    });
  }
}