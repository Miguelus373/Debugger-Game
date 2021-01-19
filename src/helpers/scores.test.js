import { getScores, submitScore } from './scores';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    result: [
      { name: 'name1', score: 10 },
      { name: 'name2', score: 58 },
      { name: 'name3', score: 27 }],
  }),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('Get Scores', () => {
  it('Returns a promise', () => {
    expect(getScores() instanceof Promise).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Returns a list of sorted scores', () => {
    getScores()
      .then(scores => expect(scores[0].score > scores[1].score).toBeTruthy());
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('Submit Score', () => {
  it('Makes a fetch API call if score is positive', () => {
    submitScore('Positive', 100);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it("Doesn't make a fetch API call if score is zero", () => {
    submitScore('Neutral', 0);
    expect(fetch).toHaveBeenCalledTimes(0);
  });
  it("Doesn't make a fetch API call if score is negative", () => {
    submitScore('Negative', -100);
    expect(fetch).toHaveBeenCalledTimes(0);
  });
});