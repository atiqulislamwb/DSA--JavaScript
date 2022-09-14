//Great ---> O(1)
//pretty Good ---> O(log n)
//Only Ok ---> O(n)
//Ehhhhhhhh--> O(nlog n)
//Awful--> O(n^2)

//space complexity & time complexity
//O(n) space ,,
function double(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(2 * arr[i]);
  }
  return result;
}
console.log(double([1, 23, 45, 55]));
//add1--> O(n)
function add1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let time1 = performance.now();
console.log(add1(10000000000));
let time2 = performance.now();
console.log(`Time : ${(time2 - time1) / 1000} seconds`);

//add2--> O(1)
function add2(n) {
  return (n * (n + 1)) / 2;
}

let time3 = performance.now();
add2(10000000000);
let time4 = performance.now();
console.log(`Time : ${(time4 - time3) / 1000} seconds`);

//which better code???
//Faster & less memory intensive & more readable ?
//run this file----> you can get answer

//Big --> O(n)
function countUpAndDown(n) {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down , Bye!!!");
}

console.log(countUpAndDown(10));

//Big--> O(n * n) --> O(n^2) --> nested loop
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.log(printAllPairs(10));

//O(2n) -----> O(n)
//O(500)-------> O(1)
//O(13n^2)-----> O(n^2)
//O(n+10)-----> O(n)
//O(10000n + 3)-----> O(n)
//O(13n^2 + 5n + 10)-----> O(n^2)

//Big --> O(n)
function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
logAtLeast5(1);
//Big--> O(1)
function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
logAtMost5(5);
