const isEven = (n) => n % 2 === 0;
const isOdd = function (num) {
  return num % 2 === 1;
  //return num % 2 !== 0;
};

// Challenge 1
function addTwo(num) {
  result = num + 2;
  return result;
}
// To check if you've completed it, uncomment these console.logs!
console.log("Challenge #1:", addTwo(3));
console.log("Challenge #1:", addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}
// uncomment these to check your work
console.log("Challenge #2:", addS("pizza"));

// Challenge 3
function map(array, callback) {
  // Create an empty array to store the results
  var result = [];
  // Iterate over each element in the input array
  for (var i = 0; i < array.length; i++) {
    // Apply the callback function to the current element
    var mappedValue = callback(array[i]);
    // Add the mapped value to the result array
    result.push(mappedValue);
  }
  // Return the result array
  return result;
}

console.log("Challenge #3:", map([1, 2, 3], addTwo));

// Challenge 4
// The forEach function takes two parameters:
// array: The array on which the callback function will be executed.
// callback: The function to be executed on each element of the array.
// Inside the function, a for loop iterates over each element of the array.
// The callback function is called with three arguments:
// The current element (array[i]).
// The index of the current element (i).
// The entire array (array).
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const array = [1, 2, 3, 4, 5];

forEach(array, function (element, index, array) {
  console.log("Challenge #4:", `Element at index ${index} is ${element}`);
});

// see for yourself if your forEach works!

// Challenge 5
// Create a new array to store the results.
// Use forEach to iterate over each element in the original array.
// Apply the provided function to each element and push the result to the new array.
// Return the new array.
function mapWith(array, callback) {
  const result = [];
  array.forEach((element, index) => {
    result.push(callback(element, index, array));
  });
  return result;
}

const numbersCh5 = [1, 2, 3, 4];
const doubled = mapWith(numbersCh5, (num) => num * 2);
console.log("Challenge #5:", doubled); // [2, 4, 6, 8]

// Challenge 6
// The reduce function takes three parameters: array, reducer, and initialValue.
// array is the array to be reduced.
// reducer is a function that takes two arguments: accumulator and currentValue. It defines the operation to be performed on each element.
// initialValue is the initial value of the accumulator.
// The function iterates over the array, applying the reducer function to each element and updating the accumulator.
// Finally, the function returns the accumulated value.
function reduce(array, reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}

// Sum all numbers
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const sumCh6 = reduce([1, 2, 3, 4], sumReducer, 0);
console.log(sumCh6); // Output: 10

// Multiply all numbers
const multiplyReducer = (accumulator, currentValue) =>
  accumulator * currentValue;
const product = reduce([1, 2, 3, 4], multiplyReducer, 1);
console.log(product); // Output: 24

// Concatenate strings
const concatenateReducer = (accumulator, currentValue) =>
  accumulator + currentValue;
const concatenatedString = reduce(
  ["Hello", " ", "World", "!"],
  concatenateReducer,
  ""
);
console.log("Challenge #6:", concatenatedString); // Output: "Hello World!"

// Challenge 7
// Function Definition: The intersection function takes a single argument arrays, which is an array of arrays.
// Reduce Method: The reduce method is used to iterate through the arrays. It starts with the first inner array as the initial value (acc).
// Filter Method: For each subsequent array (currentArray), it filters the acc array to keep only those elements that are also present in the currentArray.
// Result: The result is an array of elements that are common to all inner arrays.
function intersection(arrays) {
  return arrays.reduce((acc, currentArray) => {
    return acc.filter((element) => currentArray.includes(element));
  });
}

const arrays = [
  [1, 2, 3, 4],
  [2, 3, 5, 7],
  [2, 3, 8, 9],
];

console.log("Challenge #7:", intersection(arrays)); // Output: [2, 3]
// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
// The union function takes an array of arrays as input.
// The addUniqueElements function iterates over each element of the current array and adds it to the accumulator if it is not already present.
// The reduce method is used to apply the addUniqueElements function to each array in the input, starting with an empty array as the initial accumulator.
// Finally, the result is logged to the console.
function union(arrays) {
  function addUniqueElements(accumulator, currentArray) {
    for (let element of currentArray) {
      if (!accumulator.includes(element)) {
        accumulator.push(element);
      }
    }
    return accumulator;
  }

  return arrays.reduce(addUniqueElements, []);
}

const arraysCh8 = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6],
];
const resultUnion = union(arraysCh8);
console.log("Challenge #8:", resultUnion);
console.log(
  "Challenge #8:",
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);

// Challenge 9
function objOfMatches(array1, array2, callback) {
  // Initialize an empty object to store the matches
  const result = {};

  // Iterate through the elements of the first array
  for (let i = 0; i < array1.length; i++) {
    // Apply the callback to the current element of the first array
    const transformedElement = callback(array1[i]);

    // Check if the transformed element matches the corresponding element in the second array
    if (transformedElement === array2[i]) {
      // If there's a match, add the element from the first array as a key
      // and the element from the second array as the corresponding value
      result[array1[i]] = array2[i];
    }
  }

  // Return the resulting object
  return result;
}

const array1 = ["hi", "howdy", "bye", "later"];
const array2 = ["HI", "Howdy", "BYE", "LATER"];
const callback = (str) => str.toUpperCase();

const matches = objOfMatches(array1, array2, callback);
console.log("Challenge #9:", matches); // { hi: 'HI', bye: 'BYE', later: 'LATER' }
// console.log(objOfMatches("Challenge #9:",['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(values, callbacks) {
  //     Define the function: The function will take two parameters: an array of values and an array of callbacks.
  // Initialize an empty object: This object will store the final result.
  // Iterate over the array of values: For each value, initialize an empty array to store the results of the callbacks.
  // Iterate over the array of callbacks: For each callback, apply it to the current value and store the result in the array.
  // Assign the array of results to the corresponding key in the object.
  // Return the final object.
  const result = {};

  values.forEach((value) => {
    result[value] = callbacks.map((callback) => callback(value));
  });

  return result;
}

// Example usage:
const values = ["cat", "dog", "bird"];
const callbacks = [
  (str) => str.toUpperCase(),
  (str) => str.length,
  (str) => str + "s",
];

console.log(multiMap(values, callbacks));
// Output:
// {
//   cat: ['CAT', 3, 'cats'],
//   dog: ['DOG', 3, 'dogs'],
//   bird: ['BIRD', 4, 'birds']
// }
console.log(
  "Challenge #10:",
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  //     Initialization: We start by initializing an empty object filteredObj to store the properties that pass the filter.
  // Iteration: We use a for...in loop to iterate over each property in the input object obj.
  // Ownership Check: We check if the property is a direct property of the object using obj.hasOwnProperty(key).
  // Callback Application: We apply the callback function to the key and value of each property.
  // Condition Check: If the callback returns true, we add the property to the filteredObj.
  // Return: Finally, we return the filteredObj containing only the properties that passed the filter.
  // Initialize an empty object to store the filtered properties
  const filteredObj = {};

  // Iterate over each property in the input object
  for (const key in obj) {
    // Check if the property belongs to the object itself and not its prototype chain
    if (obj.hasOwnProperty(key)) {
      // Apply the callback function to the key and value
      if (callback(key, obj[key])) {
        // If the callback returns true, add the property to the filtered object
        filteredObj[key] = obj[key];
      }
    }
  }

  // Return the filtered object
  return filteredObj;
}

const inputObj = {
  a: "a",
  b: "not b",
  c: "c",
  d: "not d",
};

const callbackCh11 = (key, value) => key === value;

const resultCh11 = objectFilter(inputObj, callbackCh11);
console.log("Challenge #11  :", resultCh11); // Output: { a: 'a', c: 'c' }
// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
// Initialize counters for true and false results.
// Iterate through the array and apply the callback to each element.
// Increment the appropriate counter based on the callback's return value.
// Check if the majority can be determined at any point during the iteration.
// Return true if the majority of the results are true, otherwise return false.
function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      trueCount++;
    } else {
      falseCount++;
    }

    // If the number of true or false results exceeds half the array length, we can determine the majority
    if (trueCount > array.length / 2) {
      return true;
    }
    if (falseCount > array.length / 2) {
      return false;
    }
  }

  // If we finish the loop and neither trueCount nor falseCount exceeds half the array length
  return false;
}

console.log("Challenge #12  :", majority([1, 2, 3, 4, 5, 6], isEven)); // Output: false
console.log("Challenge #12  :", majority([2, 4, 6, 8, 10], isEven)); // Output: true
// /*** Uncomment these to check your work! ***/

console.log("Challenge #12  :", majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log("Challenge #12  :", majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
// Initialize two arrays: one for elements that return true from the callback, and another for elements that return false.
// Iterate through the input array and apply the callback to each element.
// Push the elements into the respective arrays based on the callback's return value.
// Concatenate the two arrays to get the desired order.
function prioritize(arr, callback) {
  let trueElements = [];
  let falseElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      trueElements.push(arr[i]);
    } else {
      falseElements.push(arr[i]);
    }
  }

  return trueElements.concat(falseElements);
}

const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  "Challenge #13  :",
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);
const numbersCh13 = [1, 2, 3, 4, 5, 6];

const prioritizedNumbers = prioritize(numbersCh13, isEven);
console.log("Challenge #13 :", prioritizedNumbers); // Output: [2, 4, 6, 1, 3, 5]

// Challenge 14
function countBy(array, callback) {
  return array.reduce((acc, item) => {
    const key = callback(item);
    if (acc[key]) {
      acc[key]++;
    } else {
      acc[key] = 1;
    }
    return acc;
  }, {});
}
// Reduce Method: We use the reduce method to iterate through the array and build the result object.
// Callback Execution: For each item in the array, we execute the callback function to get the key.
// Counting Occurrences: We check if the key already exists in the accumulator object (acc). If it does, we increment its value. If it doesn't, we initialize it to 1.
// Return Result: Finally, we return the accumulator object which contains the counts of each key.
console.log(
  "Challenge #14 :",
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
// Function Definition: The groupBy function takes two parameters: an array and a callback function.
// Reduce Method: It uses the reduce method to iterate over each element in the array.
// Callback Execution: For each element, it executes the callback to determine the key.
// Accumulate Results: It checks if the key already exists in the accumulator object. If not, it initializes an empty array for that key.
// Push Element: It then pushes the current element into the array corresponding to the key.
// Return Accumulator: Finally, it returns the accumulator object which contains the grouped elements.
function groupBy(array, callback) {
  return array.reduce((acc, item) => {
    const key = callback(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

// const numbers = [6.1, 4.2, 6.3];
// const groupedByFloor = groupBy(numbers, Math.floor);
// console.log(groupedByFloor);
// // Output: { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }

// const words = ['one', 'two', 'three'];
// const groupedByLength = groupBy(words, word => word.length);
// console.log(groupedByLength);
// // Output: { '3': [ 'one', 'two' ], '5': [ 'three' ] }

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log("Challenge #15 :", groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
// Function Definition: The function goodKeys takes two parameters: obj (an object) and callback (a function that returns a boolean).
// Result Array: An empty array result is initialized to store the keys that pass the callback test.
// Iteration: The function iterates over each key in the object using a for...in loop.
// Callback Check: For each key, it checks if the key is a direct property of the object using hasOwnProperty and then applies the callback to the value associated with the key.
// Collecting Keys: If the callback returns true, the key is added to the result array.
// Return Result: Finally, the function returns the result array containing the keys that passed the callback test.
function goodKeys(obj, callback) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && callback(obj[key])) {
      result.push(key);
    }
  }
  return result;
}
// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log("Challenge #16 :", goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
// Function Definition: The commutative function takes three parameters: func1, func2, and value.
// First Order of Operations: It first applies func1 to value, then applies func2 to the result, storing this in result1.
// Second Order of Operations: It then applies func2 to value, and applies func1 to the result, storing this in result2.
// Comparison: Finally, it compares result1 and result2. If they are equal, it returns true; otherwise, it returns false.
function commutative(func1, func2, value) {
  // Apply func1 first, then func2
  const result1 = func2(func1(value));

  // Apply func2 first, then func1
  const result2 = func1(func2(value));

  // Check if the results are the same
  return result1 === result2;
}
// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log("Challenge #17 :", commutative(multBy3, divBy4, 11)); // should log: true
console.log("Challenge #17 :", commutative(multBy3, subtract5, 10)); // should log: false
console.log("Challenge #17 :", commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
// Define the function objFilter that takes two parameters: an object and a callback function.
// Initialize an empty object to store the filtered key-value pairs.
// Iterate through the keys of the input object.
// For each key, call the callback function with the key as the argument.
// If the result of the callback function is equal to the corresponding value in the object, add the key-value pair to the new object.
// Return the new object.
function objFilter(obj, callback) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const callbackResult = callback(key);
      if (callbackResult === obj[key]) {
        result[key] = obj[key];
      }
    }
  }

  return result;
}
// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log("Challenge #18 :", objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(functions, value) {
  // Input Validation: The function first checks if the input functions is an array and if it is not empty. If not, it returns 0 as the percentage.
  // Counting True Results: It initializes a counter trueCount to keep track of how many functions return true.
  // Iterating Through Functions: It iterates through each function in the array, checks if it is a function, and then calls it with the provided value. If the function returns true, it increments the trueCount.
  // Calculating Percentage: Finally, it calculates the percentage of functions that returned true by dividing trueCount by the total number of functions and multiplying by 100.
  if (!Array.isArray(functions) || functions.length === 0) {
    return 0;
  }

  let trueCount = 0;

  for (let func of functions) {
    if (typeof func === "function" && func(value)) {
      trueCount++;
    }
  }

  return (trueCount / functions.length) * 100;
}
// /*** Uncomment these to check your work! ***/
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log("Challenge #19 :", rating(checks, 64)); // should log: 100
console.log("Challenge #19 :", rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, fn) => fn(acc), value);
}

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log("Challenge #20 :", pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
// Define the function highestFunc that accepts two parameters: an object containing functions and a subject.
// Initialize a variable to keep track of the highest value returned by the functions.
// Initialize a variable to keep track of the key associated with the highest value.
// Iterate over the keys of the object.
// For each key, call the associated function with the subject as the argument.
// Compare the returned value with the current highest value.
// If the returned value is higher, update the highest value and the key associated with it.
// After the loop, return the key associated with the highest value.
function highestFunc(obj, subject) {
  let highestValue = -Infinity;
  let highestKey = null;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let result = obj[key](subject);
      if (result > highestValue) {
        highestValue = result;
        highestKey = key;
      }
    }
  }

  return highestKey;
}
// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log("Challenge #21 :", highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log("Challenge #21 :", highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log("Challenge #21 :", highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startValue, operations) {
  return operations.reduce((acc, operation) => operation(acc), startValue);
}
function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}
function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

// /*** Uncomment these to check your work! ***/
console.log(
  "Challenge #22 :",
  combineOperations(0, [add100, divByFive, multiplyByThree])
); // Should output 60 -->
console.log(
  "Challenge #22 :",
  combineOperations(0, [divByFive, multiplyFive, addTen])
); // Should output 10

// Challenge 23
// Function Definition: The function myFunc takes two parameters: array and callback.
// Loop Through Array: A for loop iterates over each element in the array.
// Callback Execution: For each element, the callback function is called with the current element as its argument.
// Check Callback Result: If the callback returns true for any element, the function immediately returns the index of that element.
// Return -1: If the loop completes without the callback returning true for any element, the function returns -1.
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}
const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// /*** Uncomment these to check your work! ***/
console.log("Challenge #23 :", myFunc(numbers, isOdd)); // Output should be 1
console.log("Challenge #23 :", myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log("Challenge #24 :", sum); // Should output 6
