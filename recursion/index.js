const recursionSum = list => {
    return list.length === 1 
    ? list[0] 
    : list[0] + recursionSum(list.slice(1));
  };

export default recursionSum;