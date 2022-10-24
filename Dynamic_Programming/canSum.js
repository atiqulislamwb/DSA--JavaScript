//m=target sum
//n=array length
//brute force
//time Big O(n^m)
//space complexity Big O(m)

//memoize O(m* n) time ,,, O(m) space complexity

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num; //
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(2, [5, 3, 4, 7])); //false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false
