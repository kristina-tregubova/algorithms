const binary_search = (arr, val) => {
    
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      let guess = arr[mid];
  
      if (guess === val) {
        return mid;
      } else if (guess > val) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return null
  }

  export default binary_search;