const person = {
  name: 'Savlatxon',
  age: 19,
  isProgrammer: false,
  languages: ['ru', 'uz', 'tj'],
  address: {
    city: 'Tashkent',
    street: 'Murgob-53'
  },
  'complex key': 'complex',
  ['key_' + 21 * 2]: 'computed value',

  hello() {
    console.log('Hello from person', this);
  },

  arrow: () => {
    console.log('Person Arrow', this);
  },

  info() {
    console.log(this.name);
  }
}

// person.hello()
// person.arrow()
// person.info()

// console.log(person.address);
// const addressKey = 'address'
// console.log(person[addressKey]);
// console.log(person['complex key']);
// person.age++
// person.languages.push('en')

// delete person.address

///////////////////////////// Destructoring
const { age, name: firstName = "SomeName", languages } = person
console.log(languages, age, firstName);

///////////////////////////// Iterate
for (const key in person) {
  // console.log(key);
  if (person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}
// or
console.log('\n');
const keys = Object.keys(person).forEach(key => {
  console.log(person[key]);
});

//////////////////////////////////////////// bind / call / apply
const logger = {
  keys(withText = true) {
    if (withText) {
      console.log('Object keys: ', Object.keys(this));
    } else {
      console.log(Object.keys(this));
    }
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Key: ', key);
      console.log('Value: ', this[key]);
    })
  },
}

const bound = logger.keys.bind(person)
bound(false)
logger.keys.call(person, false)
logger.keys.apply(person, [false])

//////////////////////////////////////////// Class

class Human {
  isHuman = true

  humanGreet() {
    return 'greet from human';
  }
}

class Person extends Human{
  constructor(name, age) {
    super()
    this.name = name ?? 'Undefined name'
    this.age = age ?? 'Undefined age'
  }

  sayHello() {
    console.log('Hello from', this.name);
  }
}

const person1 = new Person('Savlatxon', 19)
const person2 = new Person('Someone', 21)


person1.sayHello()
console.log(person1.humanGreet())
console.log(person2.isHuman);
