import Phaser from './phaser.min';

export default

{
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};