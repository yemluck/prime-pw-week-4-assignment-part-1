console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name + '!';
  
}
// Remember to call the function to test
console.log('Running function helloName with my name:', helloName("Chris"));



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber) {
  let sumOfTwoNumbers = firstNumber + secondNumber;
  return sumOfTwoNumbers; //test 1
  // return firstNumber + secondNumber;
  }
  console.log("Function to add 2 numbers: 5 & 9", addNumbers(5, 9))

function addNumbers2( firstNumber, secondNumber ) {
  console.log("in addNumbers2");
  return firstNumber + secondNumber; //test 2
}
console.log('Function to add 2 numbers: 8 & 10:', addNumbers2(8, 10));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  let multiplication = num1 * num2 * num3;
  return multiplication;
} //end multiplyThree
console.log('The product of 1, 2 & 3 is:', multiplyThree( 1, 2, 3 ) );

/*
function multiplyThree( num1, num2, num3){
  return num1 * num2 * num3
} // end multiplyThree

Is this a better synthax than the above. I know you said simple is better

*/


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  let output;
  if ( number > 0 ){
    output = true;
  } else {
    output = false;
  }
  return output;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( '3 is a positive integer?', isPositive(3) );
console.log( '0 is a positive integer?', isPositive(0) );
console.log( 'Negative 3 is a positive integer', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let array = ['coke', 'pepsi', 'fanta', 'lime', 'sprite']

function getLast( array ) {
  let output = 'undefined';
  //let array = [];  ----> I thought I needed to declare array in the function but got error message that array has already been declared
  // so I had to declare it outside the function
  if (array.length === 0){
    output = 'undefined'
  } else {
    output = array[array.length - 1];
  }
  return output;
} // end getLast
console.log('The last item in the soda array is', getLast(array));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let x of array){
    if(x === value){
      return true;
    } 
  }
  return false;
}
console.log('Is the value in the array? Expect True', find(2, [1,2,3]));
console.log('Is the value in the array? expect false', find(5, [1,2,3]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]){
    return true;
  }
return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array2) {
  let sum = 0
  for (x of array2){
    sum += x;
  }
  // TODO: loop to add items
  return sum;
}
console.log('The numbers in the array add up to:', sumAll([1,2,3]))
console.log(" The sum of all numbers in the array is", sumAll([4,7,9,5]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positive(array){
  let positiveArray = [];
  for (x of array){
    if (x > 0){
      positiveArray.push(x);
    }
  }
  return positiveArray;
}

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
