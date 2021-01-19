const nameValidation = name => {
  if (name.trim() === '') {
    return 'Guest';
  }

  return name.trim();
};

export { nameValidation as default };