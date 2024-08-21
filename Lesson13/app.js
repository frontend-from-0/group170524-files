// These two function can only be used when running JS in the browser
// alert('This is alert from external JS file');
// prompt();
// NodeJS environment

// This is a single-line comment

/* This is a multi-line comment on a single line */

/* 
This 
is
a
multi-line
comment
*/

// Statements and expressions
const x = 5; // This is a statement - line of code that browser or server executes

5 + 5; // This is an expression

console.log('This is our first message in JS');

/* Keywords or reserved words are words that JS already uses:
  const, var, let
  false, true
  undefined
  Array, Object, Symbol, BigInt

*/

// Variables in JS:
var oldVariable = 'hello'; // Do not use var, use const or let instead.

const thisAllowsUsToStoreValueThatShouldNotChange =
	'This value will not change!'; // A constant
let thisIsVariableWithChangableValue = 'This value can change!';

console.log(
	thisAllowsUsToStoreValueThatShouldNotChange,
	thisIsVariableWithChangableValue
);

const anotherVariable = true;

console.log(anotherVariable);

// Value of variable could be any supported data type in JS or an expression
const myStringVariable = 'This is a string type value'; // For string values you can use either single or double quotes

const myNumberVariable = 100.23; // Number do not use quotes around the value

const myBooleanVariable = false; // (or true) Boolean type

const myUndefinedValue = undefined; // Undefined type - lack of value (initial lack of value)
let myEmptyVariable;

console.log('This is myEmptyVariable: ', myEmptyVariable);

const myNullValue = null; // Null type - absence of value (absance on purpose)

const myBigIntVariable = BigInt(1000000000); // BigInt type

const mySymbolVariable = Symbol('unique string'); // Symbol type

const myObjectVariable = {
	line1: 'Kungsgatan 4',
	city: 'Gothenburg',
	postCode: 43212, // In real life, you usually use type string for values like post code and tel. numbers
	isPrimary: true,
	additionalDetails: {
		note: 'This is a note for the address',
		id: 12232141232121,
	},
}; // Object type

console.log('This is myObjectVariable: ', myObjectVariable);

const myArrayVariable = [
	'First value',
	10,
	true,
	myObjectVariable,
	mySymbolVariable,
	Symbol('unique string'),
]; // Array data type (should be used for storing data of the same type)
console.log('This is myArrayVariable: ', myArrayVariable);
