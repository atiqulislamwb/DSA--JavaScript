//Great
//pretty Good
//Only Ok
//Ehhhhhhhh
//Awful

//add1
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

//add2
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
