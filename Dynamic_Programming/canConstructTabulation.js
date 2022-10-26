const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log(canConstruct("purple", ["purp", "p", "le", "purpl"]));
console.log(
  canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "c", "ef"])
);
console.log(
  canConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaaa",
  ])
);
