import {quicksort, inplace_quicksort} from './index.js';

test('test quicksort functions', () => {

const arr = [1, 4, 2, 7, 12, 0, -9, 22];
const sortedArr = [-9, 0, 1, 2, 4, 7, 12, 22];

    expect(quicksort(arr))
        .toStrictEqual(sortedArr);

    expect(inplace_quicksort(arr, 0, arr.length - 1))
        .toStrictEqual(sortedArr);
})