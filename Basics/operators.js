// Arithmetic Operators
let a = 3;
let x = (100 + 50) * a; // 450
console.log("Arithmetic Operators:");
console.log("Addition:", 10 + 5);      // 15
console.log("Subtraction:", 10 - 5);   // 5
console.log("Multiplication:", 10 * 5); // 50
console.log("Exponentiation:", 2 ** 3); // 8
console.log("Division:", 10 / 5);      // 2
console.log("Modulus:", 10 % 3);       // 1
console.log("Increment:", ++a);        // 4
console.log("Decrement:", --a);        // 3

// Assignment Operators
let y = 10;
y += 5; //15
y -= 3; //12
y *= 2; //24
y /= 4; //6
y %= 5; //1
y **= 2; // 1
console.log("\nAssignment Operators:");
console.log("Addition Assignment (+=):", y); // 1

// Comparison Operators
let val1 = 5;
let val2 = '5';
console.log("\nComparison Operators:");
console.log("Equal to (==):", val1 == val2);  // true
console.log("Strict equal (===):", val1 === val2); // false
console.log("Not equal to (!=):", val1 != val2);  // false
console.log("Strict not equal (!==):", val1 !== val2); // true
console.log("Greater than (>):", val1 > 3); // true
console.log("Less than (<):", val1 < 10); // true
console.log("Greater than or equal (>=):", val1 >= 5); // true
console.log("Less than or equal (<=):", val1 <= 5); // true

// String Operators
let str1 = "John";
let str2 = "Doe";
let fullName = str1 + " " + str2; // Concatenation
console.log("\nString Operators:");
console.log("String Concatenation:", fullName); // John Doe
console.log("String Concatenation using +=:", str1 += "   " + str2); // John   Doe

// Adding Numbers and Strings
let num1 = 5 + 5;  // 10
let num2 = "5" + 5; // "55"
let num3 = "Hello" + 5; // "Hello5"
console.log("\nAdding Numbers and Strings:");
console.log("5 + 5:", num1);  // 10
console.log("\"5\" + 5:", num2); // 55
console.log("\"Hello\" + 5:", num3); // Hello5

// Logical Operators
let isTrue = true;
let isFalse = false;
console.log("\nLogical Operators:");
console.log("Logical AND (&&):", isTrue && isFalse); // false
console.log("Logical OR (||):", isTrue || isFalse); // true
console.log("Logical NOT (!):", !isTrue); // false

// Type Operators
console.log("\nType Operators:");
let str = "John";
console.log(typeof(str)); // Output: "string"
let date = new Date();
console.log(date instanceof(Date)); // Output: true

// Bitwise Operators (JS uses 32 bit binary conversion)
let num4 = 5;  // binary: 0101
let num5 = 1;  // binary: 0001
console.log("\nBitwise Operators:");
console.log("AND (&):", num4 & num5);  // 1 (binary: 0001)
console.log("OR (|):", num4 | num5);   // 5 (binary: 0101)
console.log("NOT (~):", ~num4);        // -6 (binary: 1010)
console.log("XOR (^):", num4 ^ num5);  // 4 (binary: 0100)
console.log("Left Shift (<<):", num4 << 1); // 10 (binary: 1010)
console.log("Right Shift (>>):", num4 >> 1); // 2 (binary: 0010)
console.log("Unsigned Right Shift (>>>):", num4 >>> 1); // 2 (binary: 0010)

//Ternery Operator
let age = 17.99;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"