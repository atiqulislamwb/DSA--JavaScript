// understand the problem,
// explore concrete example,
// break it down
// solve/simplify the problem
// look back and refactor
// function charCount(string) {
//   return string.length;
// }
// console.log(charCount("aaaaabbbbbb"));

function charCount(string) {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("aaaaabbbbbbcccdklajkdjddjjHAA"));
