console.log(10e3); // 10000
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.pow(2, 53) - 1); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(1 / 0); // Infinity
console.log(Number.isFinite(1/0)); // false
const weird = 23 / undefined
console.log(weird); // NaN
console.log(Number.isNaN(weird)); // true
console.log(Number.isNaN(12)); // false

console.log('\n');
const strInt = '42'
const strFloat = '42.42'
console.log(parseInt(strInt)); // 42
console.log(parseInt(strFloat)); // 42
console.log(parseFloat(strFloat)); // 42.42
console.log(+strInt, +strFloat); // 42 42.42

console.log('\n');
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(parseFloat((0.1 + 0.2).toFixed(1))); // 0.3

////////////// BigInt
console.log('\n');
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 897987n); // 9007199255638978n
console.log(-42n); // -42n
// console.log(42.42n); // error
// console.log(10n - 4); // error
console.log(parseInt(10n) - 4); // 6
console.log(10n - BigInt(4));  // 6n
console.log(5n / 2n); // 2n

////////////// Math
console.log('\n');
console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.abs(-42)); // 42
console.log(Math.max(2, 1, 4, 6, 1, 0, 1)); // 6
console.log(Math.max(2, 1, 4, 6, 1, 0, 1)); // 0
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.9)); // 5
console.log(Math.round(4.9)); // 5
console.log(Math.trunc(4.9)); // 4
console.log(Math.random());

//randomizer
console.log('\n');
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomNumber(10, 100));







