// 1. Function to compute the product of two numbers
function myFunction(p1=8, p2=7) {  // if we will not provide any of the arguments then it will consider its default value and always consider passed value as first parameter
  return p1 * p2;
}

console.log("===== 1. Product of two numbers =====");
let result = myFunction(3);
console.log("Product: " + result); // 21

function myFunction1({p1=8, p2=7}) {  // if we want to let consider value of that parameter which we want than we need to use object.
    return p1 * p2;
  }
  
  console.log("===== 1. Product of two numbers =====");
  let result1 = myFunction1({p2:3});
  console.log("Product: " + result1); // 24


// 2. Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  if (fahrenheit === undefined) {
    console.log("Missing Fahrenheit value");
    return;
  }
  return (5 / 9) * (fahrenheit - 32);
}

console.log("===== 2. Fahrenheit to Celsius =====");
let tempInCelsius = toCelsius(77);
console.log("Temp in Celsius: " + tempInCelsius); // 25


// 3. Function with no arguments
function greetUser() {
  console.log("Hello, welcome to the JavaScript");
}

console.log("===== 3. Greeting User =====");
greetUser(); // Hello, welcome to the JavaScript


// 4. Function to calculate area of rectangle
function calculateArea(length, width) {
  return length * width;
}

console.log("===== 4. Area of Rectangle =====");
let area = calculateArea(5, 3);
console.log("Area of rectangle: " + area); // 15


// 5. Function to calculate square of a number
function square(number) {
  return number * number;
}

console.log("===== 5. Square of a number =====");
let squareResult = square(4);
console.log("Square of 4: " + squareResult); // 16


// 6. Function with local variables
function displayCar() {
  let carName = "Tesla";  // Local variable
  console.log("Car name inside function: " + carName);
}

console.log("===== 6. Local Variables =====");
displayCar(); // Car name inside function: Tesla
//  below line will give error: ReferenceError: carName is not defined
// console.log(carName);