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
