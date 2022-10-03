//time complexity O(n^2)--> worst case

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentElement) {
        arr[j + i] = arr[j];
      }
    }
    arr[j + 1] = currentElement;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([12, 2, 3, 1, 77, 65, 89, 900, 55]));

//comparing bubble, selection , insertion sorting algorithm
