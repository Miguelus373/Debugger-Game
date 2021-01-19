const loadScoreboard = (scores, game) => {
  game.add.graphics()
    .fillStyle(0x222222, 0.6)
    .fillRect(120, 120, 460, 380);

  const header = `
          Leaderboard\n
  Player               Score`;

  const [one, two, three, four, five] = scores;

  const scoreList = `  ${one.score}\n
  ${two.score}\n
  ${three.score}\n
  ${four.score}\n
  ${five.score}`;

  const playerList = `  ${one.user}\n
  ${two.user}\n
  ${three.user}\n
  ${four.user}\n
  ${five.user}`;

  game.add.text(150, 125, header, {
    fontSize: '22px',
    fill: '#fff',
  });

  game.add.text(460, 250, scoreList, {
    fontSize: '20px',
    fill: '#fff',
  });

  game.add.text(160, 250, playerList, {
    fontSize: '20px',
    fill: '#fff',
  });
};

export { loadScoreboard as default };