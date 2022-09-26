// understand the problem,
// explore concrete example,
// break it down
// solve/simplify the problem
// look back and refactor
// function charCount(string) {
//   return string.length;
// }
// console.log(charCount("aaaaabbbbbb"));

function charCount(string) {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("aaaaabbbbbbcccdklajkdjddjjHAA"));

//same array elements
//time complexity-- big O(n^2)
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 2], [1, 4, 4]));

//Anagram Challenge
//validAnagram("" , "")---> true
//validAnagram("aaz" , "zza") ---> false
//validAnagram("anagram", "nagaram") -->  true
//validAnagram("rat", "car")---> false
//validAnagram("awesome" , "awesom") ---> false
//validAnagram()
//Anagram solutions

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("awesome", "emosewa"));

//Multiple pointer patterns--------->
//sumZero ([-3,-2-,1,0,1,2,3]) ---> [-3,-3]
//sumZero([-2,-1,0,1,3]) ---> undefined
//sumZero([1,2,3])----> undefined
//time complexity ---> O(n^2)
//space complexity ---> O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

//refactor
function sumZeroAlternative(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZeroAlternative([-3, -2, -1, 0, 1, 2, 3]));

//count unique values
//countUniqueValues([1,1,1,1,1,2]) ---> 2
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) ---> 7
//countUniqueValues([]) ---> 0
//countUniqueValues([-2,-1,-1,0,1]) ---> 4
//solution------->
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

//Sliding window pattern ------------------------------>
//finds longest char at unique --->---
//maxSubarraySum([1,2,5,2,8,1,5,], 2)---> 10
//maxSubarraySum([1,2,52,8,1,5], 4)---> 17
//maxSubarraySum([4,2,1,6], 1)---> 6
//maxSubarraySum([], 4)---> null

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
//Refactor --> sliding window pattern---> O(n)
function maxSubarraySumAlternative(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumAlternative([1, 2, 5, 2, 8, 1, 5], 2));

//Divide & Conquer patterns with problem solving---->
//decrease time complexity
//linear search & time complexity O(n)
//search([1,2,3,4,5,6], 4)--> 3
//search([1,2,3,4,5,6], 6)--> 5
//search([1,2,3,4,5,6], 11)--> -1

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 6));
//Divide & Conquer patterns
//Binary search--> time complexity Log(n)
function searchAlternate(array, value) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if (array[middle] < value) {
      min = middle + 1;
    } else if (array[middle] > value) {
      max = middle + -1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(searchAlternate([1, 2, 3, 4, 5, 6], 6));
