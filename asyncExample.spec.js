const fetchDataOverApi = require('./fetchData.js');

// non async example
it.skip('the user data for user 1', () => {
    const data = fetchDataOverApi();
    expect(data).toBe('John');
})
// async example
test('the user data for user 1', async() => {
    const data = await fetchDataOverApi();
    expect(data).toBe('John');
})