const names = ['someone1', 'someone2', 'someone3', 'someone4'];

names.push('someone5'); //add to the end  // fast
names.unshift('someone0'); //add to the start  // slow

const firstName = names.shift() //delete from the start
const lastName = names.pop() //delete from the end


console.log('Names: ', names);
console.log(firstName);
console.log(lastName);
console.log(names.reverse());
console.log(names);

/////////////////////////////////////////// sort
console.log('\n\n');
const letters = ['e', 'c', 'd', 'b', 'a']
console.log(letters.sort());
/////////////////////////////////////////// splice
console.log('\n\n');
console.log(names);
console.log(names.splice(2,1));
/////////////////////////////////////////// indexOf
console.log('\n\n');
console.log(names);
const someone = 'someone1'
const index = names.indexOf(someone)
console.log(index);
console.log(names[index]);
/////////////////////////////////////////// map / toUpperCase / toLowerCase
console.log('\n\n');
const capitalNames = names.map((name, index) => {
  if (index === 1) {
    return name.toLowerCase()
  }
  return name.toUpperCase()
})
console.log(capitalNames);
/////////////////////////////////////////// includes
console.log('\n\n');
console.log(names.includes('someone5')); //false
console.log(names.includes('someone3')); //true

/////////////////////////////////////////// array / object / find / findIndex
console.log('\n\n');
const people = [
  {name: 'someone1', budget: 4200},
  {name: 'someone2', budget: 12200},
  {name: 'someone3', budget: 2250},
  {name: 'someone4', budget: 7220},
]

let findPerson;

for (const person of people) {
  if (person.budget === 4200) {
    findPerson = person
  }
}
console.log(findPerson);
/// or
findPerson = people.find((person) => person.budget === 2250)
console.log(findPerson);

findIndex = people.findIndex((person) => person.budget === 12200)
console.log(findIndex);

/////////////////////////////////////////// filter / forEach / reduce
console.log('\n\n');
let sumBudget = 0
const filtered = people.filter((person) => person.budget > 5000)
console.log(filtered);

filtered.forEach((person) => sumBudget += person.budget)
console.log(sumBudget);
/// or
const sumBudget1 = people
  .filter((p) => p.budget > 5000)
  .map((p) => p.budget)
  .reduce((acc,p) => acc + p, 0)

console.log(sumBudget1);

/////////////////////////////////////////// split / join
console.log('\n\n');
const str = 'Hi, how are you?'
const reversed = str
.split('')
.reverse()
.join('!')
.split('')
.filter((char) => char !== '!')
.join('')

console.log(reversed);




