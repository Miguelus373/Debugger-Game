const keyCombo = (activeBugs, game) => {
  activeBugs.forEach(keys => {
    game.input.keyboard.createCombo(keys, {
      resetOnWrongKey: true,
      maxKeyDelay: 0,
      deleteOnMatch: false,
    });
  });
};

export { keyCombo as default };