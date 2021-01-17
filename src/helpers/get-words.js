const getWords = async url => {
  try {
    const data = await fetch(url);
    const words = await data.json();

    return words.sort((a, b) => (a.length > b.length ? 1 : -1));
  } catch (e) {
    return false;
  }
};

export { getWords as default };