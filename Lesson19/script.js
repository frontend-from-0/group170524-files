// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console.
// Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.
class Person{
    constructor(name,age,gender){
        this._name=name;
        this._age=age;
        this._gender=gender;
    }
    greet(){
        console.log('Hello my name is'+this._name+'I\'m '+this._age+' years old'+'and my gender is '+this._gender);
    }
}
class Student extends Person{
    constructor(name,age,gender,major){
        super(name,age,gender);
        this._major=major;
    }
    greet(){
        console.log('Hello my name is'+this._name+'I\'m '+this._age+' years old'+'and my gender is '+this._gender+'And I\'m studying '+this._major);
    }
}

const person1=new Person('Duygu',32,'Female');
const person2=new Student('DuyguJr.',23,'Female','Computer Science');

console.log(person1);
console.log(person2);
person2.greet();

// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").

class Shape{
    constructor(name,color) {
      this._name=name;
      this._color=color;
    }

    describe(){
      console.log('This is a '+this._color+' '+this._name);
  }
}

class Square extends Shape{
    constructor(color,sideLength){
      super('square',color);
      this._sideLength=sideLength;
      this._area=sideLength * sideLength;
    }

    describe(){
      console.log(`This is a ${this._color} square with a side length  of ${this._sideLength} and an area of ${this._area}`);
    }

    describeShape () {
      return super.describe();
    }
}



const square1=new Shape('Square','blue');
square1.describe();
console.log (square1);

const square2=new Square('red',5);
square2.describe();
square2.describeShape();




// 3. Create a Vehicle class with make, model, and year properties, and a start() method
// that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numWheels property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.


// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

