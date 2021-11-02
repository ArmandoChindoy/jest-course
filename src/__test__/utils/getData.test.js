import getData from '../../utils/getData';
// import {} from 'jest-fetch-mock'

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('getData', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com').then((res) => {
      expect(res.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
