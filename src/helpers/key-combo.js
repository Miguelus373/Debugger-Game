const keyCombo = (activeBugs, game) => {
  activeBugs.forEach(container => {
    const keys = container.last.text;
    game.input.keyboard.createCombo(keys, {
      resetOnWrongKey: true,
      maxKeyDelay: 0,
      deleteOnMatch: false,
    });
  });
};

export { keyCombo as default };