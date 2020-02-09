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

  export default quicksort;

  