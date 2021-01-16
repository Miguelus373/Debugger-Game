const bugDestroy = (input, children, keyCodes) => {
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

  bug.destroy();
};

export { bugDestroy as default };