import quicksort from './index.js';

test('test quicksort function', () => {

    expect(quicksort([1, 4, 2, 7, 12, 0, -9, 22]))
        .toStrictEqual([-9, 0, 1, 2, 4, 7, 12, 22])
})