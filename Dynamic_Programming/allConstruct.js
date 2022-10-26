const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("purple", ["purp", "p", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "c", "ef"])
);
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaaa",
  ])
);
