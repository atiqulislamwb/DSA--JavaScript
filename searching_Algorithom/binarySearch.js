//half remain
//divide & conquer
//big O(1)

function binarySearch(arr, value) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === value) return mid;
    // Else look in left or right half accordingly
    else if (arr[mid] < value) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 23, 44, 5, 6, 7, 8, 10, 11, 65, 55], 11)); //8 index
