// 1. Declare a variable named `firstNumber` and initialize it to 5.
const firstNumber = 5;
// Declare a variable named `secondNumber` and initialize it to 3.
const secondNumber = 3;
// Declare a variable named `sumResult` and initialize it to the sum of `firstNumber` and `secondNumber`.
const sumResult = firstNumber + secondNumber;

console.log('Exercise 1:');
console.log(sumResult);
// 2. Declare a variable named `userName` and initialize it to your name as a string.
// Declare a variable named `userAge` and initialize it to your age as a number.
// Declare a variable named `greetingPhrase` and initialize it to the string "Hello, world!".
// Add `userName` and `userAge` to the sentence above. "Hello, world! My name is (userName). I'm (userAge) years old."
const userName = 'Yagiz';
const userAge = 17;
const greetingPhrase = 'Hello, world!';
console.log('Exercise 2:');
console.log(
	greetingPhrase +
		' My name is ' +
		userName +
		". I'm " +
		userAge +
		' years old.',
);

console.log(
	`${greetingPhrase} My name is ${userName}. I\'m ${userAge} years old.`,
);

console.log('------------------------');

// 3. Declare a variable named `dividend` and initialize it to 10.
// Declare a variable named `divisor` and initialize it to 3.
// Declare a variable named `divisionResult` and initialize it to the quotient of `dividend` divided by `divisor`.
// Declare a variable named `differenceResult` and initialize it to the difference between `dividend` and `divisor`.

const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;

console.log(divisionResult, differenceResult);

console.log('------------------------');

// 4. Declare a variable named `firstName` and initialize it to your first name as a string.
// Declare a variable named `lastName` and initialize it to your last name as a string.
// Declare a variable named `fullName` and initialize it to the concatenation of `firstName` and `lastName`.

console.log('Exercise 4:');

const firstName = 'Ayse';
const lastName = 'Baskin';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log('------------------------');

// 5. Declare a variable named `firstFactor` and initialize it to 7.
// Declare a variable named `secondFactor` and initialize it to 2.
// Declare a variable named `multiplicationResult` and initialize it to the product of `firstFactor` and `secondFactor`.

const firstFactor = 7;
const secondFactor = 2;
const multiplicationResult = firstFactor * secondFactor;

console.log('Exercise 5:');
console.log(multiplicationResult);

// 6. Declare a variable named `PI` and initialize it to the value of PI (3.14159). Use the built-in function `Math.PI`.

console.log('Exercise 6:', Math.PI);
console.log('------------------------');

// 7. Declare a variable named `counter` and initialize it to 0.
// Increment the `counter` variable by 1 using 3 different ways to increment numbers.
let counter = 0;
const step = 1;

console.log((counter = counter + step));

console.log(counter++);

console.log((counter += step)); // counter = counter + step;

console.log(++counter);
console.log('------------------------');

// 8. Declare a variable named `initialTemperature` and initialize it to 20.
// Increase the value of `initialTemperature` by 5 and log the result to the console.
// Global scope
let initialTemperature = 20;
const temperatureStep = 5;

console.log((initialTemperature = initialTemperature + temperatureStep));

console.log('Exercise 8:');
console.log('------------------------');

// 9. Declare a variable named `numberEx9` and initialize it to 6.
// Declare a variable named `incrementedNumber` and initialize it to `++numberEx9` (numberEx9 incremented using the prefix ++ operator).
// Log both values to the console.

console.log('------------------------');

// 10. Declare a variable named `numberEx10` and initialize it to 8.
// Declare a variable named `postIncrementedNumber` and initialize it to `numberEx10++` (numberEx10 incremented using the postfix ++ operator).
// Log both values to the console.

console.log('------------------------');

// 11. Declare a variable named `numberEx11` and initialize it to -3.
// Use the prefix ++ operator to increment the value of `numberEx11` by 1, then multiply the result by 2 and log it to the console.
let numberEx11 = -3;
let result = (numberEx11 + 1) * 2;
console.log(result);
console.log('------------------------');

// 12. Declare two variables named `a` and `b` and initialize them to 2 and 3, respectively.
// Use the prefix ++ operator to increment the value of `a` by 1, then add `b` to the result and log it to the console.

console.log('------------------------');

// BONUS: Generate a random number in a range from 0 (excluding) to 10 (including).
// Use `Math.floor()` and `Math.random()` to do that.
// `Math.random()` generates a random number between 0 and 1 (not including 1).

const random = Math.floor(Math.random() * (10)) + 50;
console.log(random);