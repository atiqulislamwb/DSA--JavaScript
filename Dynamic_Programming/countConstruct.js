const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysRest = countConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += numWaysRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd"]));
console.log(countConstruct("skateboard", ["bo", "dkc", "jsa"]));
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
