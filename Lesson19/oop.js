  /* Programming paradigms
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it
  
  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.

*/

// const dog1 = {
//   name: 'dog1',
//   age: 5,
//   breed: 'golden retriever',
//   sound: function () {
//     console.log('woof');
//   },
//   numberOfLegs: 4,
// }; 

// const dog2 = {
//   name: 'dog2',
//   age: 1,
//   breed: 'poodle',
//   sound: function () {
//     console.log('woof');
//   },
//   numberOfLegs: 4,
// };

const duck = {
  name: 'duck',
  age: 3,
  breed: 'mallard',
  sound: function () {
    console.log('quack');
  },
  numberOfLegs: 2,
}

const fish = {
  name: 'fish',
  age: 1,
  breed: 'goldfish',
}


class Animal {
  constructor(name, age, breed) {
    // _ is used in mark properties as "private" inside a Class
    this._name = name;
    this._age = age;
    this._breed = breed;
  }

  // get is a keyword that allows us to define a getter method
  get name() {
    return this._name.toUpperCase();
  }

  get age() {
    return this._age;
  }

  get breed() {
    return this._breed;
  }

  // set is a keyword that allows us to define a setter method
  set name(newName) {
    this._name = newName.trim();
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error('Age must be greater than 0');
    }
  }

  set breed(newBreed) {
    this._breed = newBreed.trim();
  }


  // We don't use keyword "function" inside a class
  describe() {
    console.log('This is a ' + this._breed + ' named ' + this._name + ' that is ' + this._age + ' years old.');
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed);
    this._numberOfLegs = 4;
  }

  describe() {
    console.log('This is a ' + this._breed + ' named ' + this._name + ' that is ' + this._age + ' years old with ' + this._numberOfLegs + ' legs.');
  }

  sound () {
        console.log('woof');
  }
}

const dog1 = new Animal('dog1', 5, 'golden retriever');
const dog2 = new Dog('dog2', 1, 'poodle');

console.log(dog1.name);
console.log(dog1);

dog1.name = 'Dog dog    ';
dog1.age = -5;
dog1.breed = 'Labrador';

console.log(dog1);


dog1.describe();
dog2.describe();