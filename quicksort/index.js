// divide and conquer recursive algorithm

// book example, slow implementation
// take first element as pivot
// can degrade from O(nlogn) to O(n^2) 
const quicksort = (array) => {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let less = array.slice(1).filter(el => el <= pivot);
    let greater = array.slice(1).filter(el => el > pivot);

    return quicksort(less).concat([pivot], quicksort(greater));
  }
}

// in-place quicksort implementation
// take last element as pivot
// about O(nlogn) average
const inplace_quicksort = (array, start, end) => {

  if (start >= end) return;

  const index = partition(array, start, end);
  inplace_quicksort(array, start, index - 1);
  inplace_quicksort(array, index + 1, end);

  return array;
}

const partition = (array, start, end) => {

  let pivotIndex = start;
  let pivotValue = array[end];

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, end);
  return pivotIndex;
}

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

export {quicksort, inplace_quicksort};