// time complexity O(n)

const foo = (n) => {
  if (n <= 2) return;
  foo(n - 1);
};
const bar = (n) => {
  if (n <= 2) return;
  bar(n - 2);
};

// memoization
// js object , keys will be arg to fn , value will the be return value,,

const fib = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
