const binary_search = require('./index.js');

test('test binary search function', () => {

    expect(binary_search([1, 2, 3, 4], 4))
        .toBe(3)
})