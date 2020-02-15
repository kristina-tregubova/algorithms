import {quicksort, inplace_quicksort} from './index.js';

const arr = [1, 4, 2, 7, 12, 0, -9, 22];
const sortedArr = [-9, 0, 1, 2, 4, 7, 12, 22];

test('test quicksort functions', () => {

    expect(quicksort(arr))
        .toStrictEqual(sortedArr);
})

test('test inplace-quicksort functions', () => {
    
        expect(inplace_quicksort(arr, 0, arr.length - 1))
            .toStrictEqual(sortedArr);
    })