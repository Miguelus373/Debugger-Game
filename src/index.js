import Phaser from 'phaser';
import config from './config';
import boot from './scenes/boot-scene';
import preload from './scenes/preload-scene';
import title from './scenes/title-scene';
import instructions from './scenes/instructions-scene';
import leaderboard from './scenes/leaderboard-scene';
import game from './scenes/game-scene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', boot);
    this.scene.add('Preloader', preload);
    this.scene.add('Title', title);
    this.scene.add('Instructions', instructions);
    this.scene.add('Leaderboard', leaderboard);
    this.scene.add('Game', game);
    this.scene.start('Boot');
  }
}

window.game = new Game();