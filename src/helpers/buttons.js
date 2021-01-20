const createButton = (x, y, text, game) => {
  const buttonBox = game.add.graphics()
    .fillStyle(0x1ca1d6, 0.9)
    .fillRoundedRect(-150, -25, 300, 50, 15);

  const buttonText = game.add.text(0, 0, text, { fontSize: '30px', fill: '#fff' })
    .setOrigin(0.5, 0.5);

  game.add.container(x, y, [buttonBox, buttonText])
    .setSize(300, 50)
    .setInteractive();
};

export { createButton as default };