/////////////////////////////// Function Declaration
hello('Savlatxon')
function hello(name) {
  console.log(`Hello ${name}!`);
}

/////////////////////////////// Function Expression
const hello2 = function(name) {
  console.log(`Hello ${name}!`);
}
hello2('Savlatxon')

console.log(typeof hello, typeof hello2);

/////////////////////////////// Anonym Function / setTimeout / setInterval
setTimeout(() => {
  hello('Savlatxon')
}, 1000)

let counter = 0
const interval = setInterval(() => {
  if (counter === 5) {
    clearInterval(interval)
  } else {
    hello('Savlatxon')
    ++counter
  }
}, 500)

/////////////////////////////// Arrow Function
console.log('\n');
let name = 'SomeOne'
let age = 18

const arrow = (name, age) => {
  console.log(`Hello ${name}, ${age}!`);
}
const arrow1 = name => {
  console.log(`Hello ${name}!`);
}
arrow(name, age)
arrow1(name)

////
function pow(num, exp) {
  return Math.pow(num, exp)
}
// or
const pow1 = (num, exp) => Math.pow(num, exp)

console.log(pow(2,3));
console.log(pow1(2,3));

/////////////////////////////// Default Parameters
console.log('\n');
const sum = (a = 40, b = a / 2) => a + b
console.log(sum(20, 2));
console.log(sum());

function sumAll(... numbers) {
  return numbers.reduce((acc, val) => (acc += val), 0)
}
console.log(sumAll(1, 3, 4, 6, 1, 2));

/////////////////////////////// Closures / Замыкание
console.log('\n');
function createPerson(name) {
  return function (lastName) {
    console.log(name + ' ' + lastName);
  }
}

const addLastName = createPerson('Savlatxon')
addLastName('Eshonov')
addLastName('Bozorov')

