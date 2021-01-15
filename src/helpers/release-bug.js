const releaseBug = (n, game) => {
  let container;
  const bugGroup = game.physics.add.group();
  const words = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Eco'];

  while (n > 0) {
    const bug = bugGroup.create(0, 0, 'bugSprite')
      .setScale(0.2)
      .anims.play('go', true);

    const bugText = game.add.text(-48, -60, words[n - 1], {
      fontSize: '18px',
      fill: '#fff',
    });

    container = game.add.container(48 + (Math.random() * 604), 50, [bug, bugText]);
    container.setSize(bug.width * 0.2, bug.height * 0.2);

    game.physics.world.enableBody(container);

    container.body.setBounce(1)
      .setCollideWorldBounds(true)
      .setVelocityY(Math.random() * 40)
      .setVelocityX(Math.random() * (container.x > 350 ? -100 : 100));

    n -= 1;
  }
  return container;
};

export { releaseBug as default };