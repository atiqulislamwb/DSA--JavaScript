console.log("linear Searching -- traverse all the item in array");
//Javascript has search
//indexOf
//includes
//find
//findIndex

//PseudoCode  Linear Search
//big O(n) ---> worst case
function linearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([3, 4, 66, 77, 3, 1, 4], 1)); // 5
