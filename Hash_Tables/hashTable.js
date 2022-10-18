//hash table
//are used for store key value pairs--like arrays but keys are not ordered...

// function slowHashTable(key) {
//   for (var i = 0; i < 1000; i++) {
//     console.log("everyday i am hashing");
//   }
//   return key[0].charCodeAt(0);
// }
// slowHashTable("abcc");

//  function randomHash(key) {
//   return Math.floor(Math.random() * 1000);
// }

// console.log(randomHash("a"));

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 10));
console.log(hash("purple", 10));

function hash2(key, arrayLen) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    const element = key[i];
    let value = element.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}

function hash3(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const element = key[i];
    let value = element.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
