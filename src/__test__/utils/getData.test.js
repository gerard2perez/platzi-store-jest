import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar una API y retornar datos', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const response = await getData('https://google.com');
    expect(response).toEqual({ data: '12345' });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
