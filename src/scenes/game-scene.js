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

    const boom = this.add.sprite(350, 350, 'boom');
    boom.visible = false;

    const score = this.add.text(20, 20, 'Score: 0', {
      fontSize: '20px',
      fill: '#fff',
    });

    this.turret = this.physics.add.sprite(350, 588, 'turret')
      .setScale(0.15);

    // create animation for bugs, turret, and explosion
    this.anims.create({
      key: 'go',
      frames: 'bugSprite',
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'shoot',
      frames: 'turret',
      frameRate: 9,
      repeat: 0,
    });

    this.anims.create({
      key: 'boom',
      frames: 'boom',
      frameRate: 4,
      showOnStart: true,
      hideOnComplete: true,
    });

    // release bugs and creates keycombos
    this.activeBugs = releaseBug(5, this.bugNames, this);
    keyCombo(this.activeBugs, this);

    // destroy bug with the keycombo name
    this.input.keyboard.on('keycombomatch', (keyCombo) => {
      this.turret.anims.play('shoot', true);

      bugDestroy(keyCombo.keyCodes,
        this.children.list,
        score,
        boom,
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
    this.add.text(260, 290, 'Game Over', {
      fontSize: '30px',
      fill: '#fff',
    });

    this.time.delayedCall(3000, this.goToLeaderboard, [], this);
  }

  goToLeaderboard() {
    this.scene.start('Leaderboard');
  }
}