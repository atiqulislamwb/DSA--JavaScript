//javascript built in sort method (arr.sort((a, b)=> a-b || b-a || a=b))
//a-b ---> small to big sort
//b-a ---> big to small sort

//bubble sort implementation-->swap not optimize code

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + i]) {
        let temp = arr[j];
        arr[j] = arr[j + i];
        arr[j + i] = temp;
      }
    }
  }

  return arr;
}

function bubbleSort2(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + i]) {
        let temp = arr[j];
        arr[j] = arr[j + i];
        arr[j + i] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([2, 6, 1, -9, 55, 75, 32, 12]));
console.log(bubbleSort2([2, 6, 1, -9, 55, 75, 32, 12]));

//optimize code--->
function bubbleSort3(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + i]) {
        let temp = arr[j];
        arr[j] = arr[j + i];
        arr[j + i] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort3([2, 6, 1, -9, 55, 75, 32, 12]));
