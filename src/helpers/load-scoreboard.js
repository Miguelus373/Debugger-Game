const loadScoreboard = (scores, game) => {
  const list = scores.sort((a, b) => (a.score > b.score ? -1 : 1));

  game.add.graphics()
    .fillStyle(0x222222, 0.6)
    .fillRect(120, 120, 460, 380);

  const header = `
          Leaderboard\n
  Player               Score`;

  const scoreList = `${list[0].score}\n\n${list[1].score}\n\n${list[2].score}\n\n${list[3].score}\n\n${list[4].score}`;
  const playerList = `${list[0].user}\n\n${list[1].user}\n\n${list[2].user}\n\n${list[3].user}\n\n${list[4].user}`;

  game.add.text(150, 125, header, {
    fontSize: '22px',
    fill: '#fff',
  });

  game.add.text(460, 250, scoreList, {
    fontSize: '20px',
    fill: '#fff',
  });

  game.add.text(170, 250, playerList, {
    fontSize: '20px',
    fill: '#fff',
  });
};

export { loadScoreboard as default };