const bugDestroy = (input, children, score, explotion, keyCodes) => {
  let bugName = '';

  // get bug name using key codes
  input.forEach(key => {
    // eslint-disable-next-line no-restricted-syntax
    for (const code in keyCodes) {
      if (keyCodes[code] === key) {
        bugName += code;
      }
    }
  });

  // match name with bug
  const bug = children
    .find(child => child.type === 'Container'
          && child.list[1].text.toUpperCase() === bugName);

  // update score
  const newScore = parseInt(score.text.split(' ')[1], 10) + bug.list[1].text.length;
  score.setText(`Score: ${newScore}`);

  // show explotion
  explotion.x = bug.x;
  explotion.y = bug.y;
  explotion.anims.play('boom');

  bug.destroy();
};

export { bugDestroy as default };