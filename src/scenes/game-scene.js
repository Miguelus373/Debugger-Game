import Phaser from '../phaser.min';
import releaseBug from '../helpers/release-bug';

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

    releaseBug(5, this);
  }
}