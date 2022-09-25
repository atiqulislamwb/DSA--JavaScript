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
