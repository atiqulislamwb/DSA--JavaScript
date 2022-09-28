//recursion is a process (a function in our case) that calls it's self......
//call stack -->

function takeShower() {
  console.log("Showering");
}

function eatBreakFast() {
  let meal = cookFood();
  console.log(`Eating ${meal}`);
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  const meals = items[Math.floor(Math.random() * items.length)];
  return meals;
}

function wakeUp() {
  console.log("wake up");
  takeShower();
  eatBreakFast();
  console.log("Ok!! ready to go to work");
}

wakeUp();
//recursive function
//Base case for
//Different Input
//first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(10));

//using Loop--->
function countDownLoop(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done");
}
console.log(countDownLoop(10));

//second recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(5));

//using recursive function
//factorial recursive functions
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

//using loop
function factorialLoop(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

console.log(factorialLoop(5));

//Helper Method Recursion------>
//collecting odd values in arrays
function collectedOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectedOddValues([1, 2, 3, 4, 5, 67, 8, 9, 0]));

//using pure recursive function
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 67, 8, 9, 0]));

//More recursive function for problem solve
//power problem solve with recursive function
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(5, 3));

//range of number
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(10, 20));

// Time complexity O(2^n)
function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(9));
//reverse recursive function
let data = [5, 12, 65, 89, 0, 100];
let temp;
function reverse(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverse(data, start + 1, end - 1);
    return data;
  }
}
//built in
const arr = ["one", "two", "three"];
arr.reverse();
console.log(arr); // [ "three", "two", "one" ]

//checkPalindrome
function checkPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1));
  return false;
}

console.log(checkPalindrome("aa")); // true
console.log(checkPalindrome("russell")); // false
console.log(checkPalindrome("rotor")); // true
//capitalize

const arr1 = ["apple", "banana", "orange", "grapes"];
const capitalize = (arr = [], ind = 0) => {
  const helper = (str = "") => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  if (ind < arr.length) {
    arr[ind] = helper(arr[ind]);
    return capitalize(arr, ind + 1);
  }
  return;
};
capitalize(arr1);
console.log(arr1);
