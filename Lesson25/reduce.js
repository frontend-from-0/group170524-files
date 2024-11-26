/* 
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
array.reduce((accumulator, currentValue, currentIndex, array) => {}, initialValue);  


- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/

// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 6, 3, 4, 2];

const sum = numbersEx1.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    console.log(
      `accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, array: ${array}`
    );

    return accumulator + currentValue;
  }
);
console.log(sum);
console.log("-------------------");

const sumV2 = numbersEx1.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    console.log(
      `accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, array: ${array}`
    );

    return accumulator + currentValue;
  },
  0
);
console.log(sumV2);
console.log("-------------------");

// Exercise 2:
// Find the maximum value in the given array.
const numbersEx2 = [8, 3, 11, 6, 4, 1111];

const maximumValue = numbersEx2.reduce(
  (accumulator, currentValue, i, array) => {
    console.log(
      `accumulator: ${accumulator}, currentValue: ${currentValue}, array: ${array}`
    );
    if (accumulator > currentValue) {
      return accumulator;
    } else {
      return currentValue;
    }
  }
);

console.log(maximumValue);
console.log("-------------------");

// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.
const elements = ["a", "b", "a", "c", "b", "a"];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  console.log(
    `accumulator: ${JSON.stringify(
      accumulator
    )}, currentValue: ${currentValue}, accumulator[currentValue]: ${
      accumulator[currentValue]
    }`
  );
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(elementCounts);
console.log("-------------------");

// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];
const average =
  numbersEx4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }) / numbersEx4.length;

console.log(average);
console.log("-------------------");

// Exercise 5: Explain the code below
// Count the number of unique elements in the array.
const numbersEx5 = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbersEx5.reduce((accumulator, currentValue, index, array) => {
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, array: ${array}`
  );
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
    return accumulator;
  } else {
    return accumulator.filter((element) => element !== currentValue);
  }
}, []).length;

console.log(uniqueCount);
