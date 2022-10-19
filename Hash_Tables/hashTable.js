//hash table
//are used for store key value pairs--like arrays but keys are not ordered...

function slowHashTable(key) {
  for (var i = 0; i < 1000; i++) {
    console.log("everyday i am hashing");
  }
  return key[0].charCodeAt(0);
}
slowHashTable("abcc");

function randomHash(key) {
  return Math.floor(Math.random() * 1000);
}

console.log(randomHash("a"));

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

//separate chaining--

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const element = key[i];
      let value = element.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
      return valuesArr;
    }
  }
}

let ht = new HashTable();
console.log(ht.set("hello", "good"));
console.log(ht.set("white", "#ffffff"));

//Big o--->
// insert O(1)
// deletion O(1)
// access O(1)
