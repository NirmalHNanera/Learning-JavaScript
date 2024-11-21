// JavaScript Data Types Demo
// Primitive Data Types ==> string, number, boolean, undefined, null, symbol, BigInt
// Non-Primitive Data Types ==> Object, Array, Function, Date, RegExp,Error
// 1. String
// let color = "Yellow";
// let lastName = "Johnson";
// console.log("String:", color, lastName);

// // 2. Number
// let length = 16;
// let weight = 7.5;
// console.log("Number:", length, weight);

// 3. BigInt (new datatype in ES2020)
let bigNumber = BigInt("123456789012345678901234567890");
console.log("BigInt:", bigNumber);

// 4. Boolean
let isActive = true;
let isCompleted = false;
console.log("Boolean:", isActive, isCompleted);

// 5. Undefined
let car;
console.log("Undefined:", car);  // car is declared but not assigned a value

// 6. Null
let person = null;
console.log("Null:", person);

// 7. Symbol
let uniqueSymbol = Symbol("unique");
console.log("Symbol:", uniqueSymbol);

// 8. Object
const personObject = {firstName: "John", lastName: "Doe"};
console.log("Object:", personObject);

// 9. Array (which is also an object)
const cars = ["Saab", "Volvo", "BMW"];
console.log("Array:", cars);

// 10. Date Object
const date = new Date("2022-03-25");
console.log("Date:", date);

// 11. Operations with mixed types
let result1 = 16 + "Volvo";  // Number + String => String
console.log("Result of 16 + 'Volvo':", result1);

let result2 = "Volvo" + 16;  // String + Number => String
console.log("Result of 'Volvo' + 16:", result2);

// Mixed Operations
let result3 = 16 + 4 + "Volvo";  // Number + Number + String => String
console.log("Result of 16 + 4 + 'Volvo':", result3);

let result4 = "Volvo" + 16 + 4;  // String + Number + Number => String
console.log("Result of 'Volvo' + 16 + 4:", result4);

// 12. Dynamic typing in JavaScript
let dynamicVar;
console.log("Dynamic Variable before assignment:", dynamicVar);
dynamicVar = 5;  // Now a number
console.log("Dynamic Variable after assignment as number:", dynamicVar);
dynamicVar = "John";  // Now a string
console.log("Dynamic Variable after assignment as string:", dynamicVar);

// 13. typeof operator
console.log("typeof color:", typeof color);  // string
console.log("typeof length:", typeof length);  // number
console.log("typeof bigNumber:", typeof bigNumber);  // bigint
console.log("typeof isActive:", typeof isActive);  // boolean
console.log("typeof car:", typeof car);  // undefined
console.log("typeof person:", typeof person);  // object (null is of type object)
console.log("typeof uniqueSymbol:", typeof uniqueSymbol);  // symbol
console.log("typeof personObject:", typeof personObject);  // object
console.log("typeof cars:", typeof cars);  // object (arrays are objects)
console.log("typeof date:", typeof date);  // object (date is an object)

// 14. Emptied variable (undefined)
car = undefined;
console.log("Car after being set to undefined:", car);

// 15. Empty string (empty value but not undefined)
let emptyString = "";
console.log("Empty String:", emptyString);
console.log("typeof emptyString:", typeof emptyString);  // string
