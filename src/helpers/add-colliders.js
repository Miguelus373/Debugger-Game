const addColliders = (player, children, callback, game) => {
  const containers = children.filter(child => child.type === 'Container');

  containers.forEach(bug => {
    game.physics.add.collider(player, bug, callback, null, game);
  });
};

export { addColliders as default };