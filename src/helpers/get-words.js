const getWords = async () => {
  const URL = 'https://random-word-api.herokuapp.com/word?number=1000';
  try {
    const data = await fetch(URL);
    const words = await data.json();

    return words.sort((a, b) => (a.length > b.length ? 1 : -1))
      .map(word => word[0].toUpperCase() + word.slice(1));
  } catch (e) {
    return false;
  }
};

export { getWords as default };