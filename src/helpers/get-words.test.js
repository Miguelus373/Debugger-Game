import getWords from './get-words';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(['these', 'are', 'test', 'words']),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('Get words API call', () => {
  it('Returns smallest word with a capital letter', async () => {
    const words = await getWords('www.test.com');

    expect(words[0]).toBe('Are');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Returns false when call fail', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('API is down')));

    const data = await getWords('www.test.com');

    expect(data).toBeFalsy();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});