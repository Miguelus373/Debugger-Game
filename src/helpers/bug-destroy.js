const bugDestroy = (input, children, boom, keyCodes) => {
  let bugName = '';

  input.forEach(key => {
    // eslint-disable-next-line no-restricted-syntax
    for (const code in keyCodes) {
      if (keyCodes[code] === key) {
        bugName += code;
      }
    }
  });

  const bug = children
    .find(child => child.type === 'Container'
          && child.list[1].text.toUpperCase() === bugName);

  boom.x = bug.x;
  boom.y = bug.y;
  boom.anims.play('boom');

  bug.destroy();
};

export { bugDestroy as default };