import Phaser from 'phaser';
import background from '../assets/bg.jpg';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background', background);
  }

  create() {
    this.scene.start('Preloader');
  }
}