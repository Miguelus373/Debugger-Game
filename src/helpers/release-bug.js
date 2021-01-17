const releaseBug = (n, names, game) => {
  const activeBugs = [];
  const bugGroup = game.physics.add.staticGroup();

  while (n > 0) {
    // create bug and bug name
    const bug = bugGroup.create(0, 0, 'bugSprite')
      .setScale(0.2)
      .anims.play('go', true);

    const bugText = game.add.text(-48, -60, names[n - 1], {
      fontSize: '18px',
      fill: '#0f0',
    });

    // wrap bug and name in a container
    const container = game.add.container(48 + (Math.random() * 604), 50, [bug, bugText]);
    container.setSize(bug.width * 0.2, bug.height * 0.2);

    // add physics to container
    game.physics.world.enableBody(container);
    container.body.setBounce(1)
      .setCollideWorldBounds(true)
      .setVelocityY((Math.random() * 42) + 5)
      .setVelocityX(Math.random() * (container.x > 350 ? -100 : 100));

    // update storage
    activeBugs.push(names[n - 1]);
    localStorage.setItem('words', JSON.stringify(names.splice(0, n)));

    n -= 1;
  }

  return activeBugs;
};

export { releaseBug as default };