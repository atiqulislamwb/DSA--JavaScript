//Radix Sort is a special sorting algorithm that works on list of numbers...
//redix sort helper method
//space complexity O(n+k)
//time complexity O(nk)
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      digitBuckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([66, 44, 8765, 2342, 9, 41, 33, 24232]));

//console.log([66, 44, 8765, 2342, 9, 41, 33, 24232].sort((a, b) => a - b));
