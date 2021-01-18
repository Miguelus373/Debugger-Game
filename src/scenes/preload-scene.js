import Phaser from '../phaser.min';
import bugSprite from '../assets/bug-sprite.png';
import base from '../assets/base.png';
import turret from '../assets/turret-sprite.png';
import logo from '../assets/logo.png';
import boom from '../assets/boom.png';
import titleBg from '../assets/title-bg.jpg';
import titleBug from '../assets/spider.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // add background image
    const bg = this.add.image(350, 320, 'background');
    bg.setDisplaySize(700, 640);

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.7);
    progressBox.fillRect(200, 270, 300, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 70,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 24,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', value => {
      percentText.setText(`${Math.floor(value * 100, 1)}%`);
      progressBar.clear();
      progressBar.fillStyle(0x09ff00, 1);
      progressBar.fillRect(210, 280, 280 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', file => {
      assetText.setText(`Loading ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      loadingText.setText('Done!');
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);

    // load assets needed
    this.load.image('logo', logo);
    this.load.image('titleBug', titleBug);
    this.load.image('titleBackground', titleBg);
    this.load.image('base', base);
    this.load.spritesheet('boom', boom, {
      frameWidth: 122,
      frameHeight: 136,
      endFrame: 0,
    });
    this.load.spritesheet('turret', turret, {
      frameWidth: 271,
      frameHeight: 700,
      startFrame: 0,
      endFrame: 2,
    });
    this.load.spritesheet('bugSprite', bugSprite, {
      frameWidth: 478,
      frameHeight: 396,
      startFrame: 0,
      endFrame: 3,
    });
  }

  init() {
    this.readyCount = 0;
  }

  // start title scene when finish loading
  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}