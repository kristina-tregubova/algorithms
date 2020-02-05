const recursionSum = require('./index.js');

test('test recursion sum function', () => {

    expect(recursionSum([1, 2, 3, 4]))
        .toBe(10)
})