// 1. Global Scope
let globalVar = "global variable";  // Global scope
console.log("Global scope:", globalVar);  // output: global variable

// 2. Function Scope
function myFunction() {
    let a = 10;  // Function scope (local to the function)
    console.log("Inside function, a:", a);  // output: 10
    
    // Hoisting
    try {
        console.log("Hoisted variable, b:", b);  // ReferenceError: Cannot access 'b' before initialization
    } catch (e) {
        console.log("Hoisted variable, b:", e.message);  // ReferenceError: Cannot access 'b' before initialization
    }
    
    let b ; // b is hoisted 
    console.log("After hoisted, b:", b);  // output: undefined
    b = 20;
    console.log("After assignment, b:", b);  // output: 20

    // Block Scope with `let` (block-scoped)
    if (true) {
        let c = "inside a block";  // c is block-scoped, only accessible inside this block
        console.log("Inside function, c:", c);  // output: inside a block
    }
    
    // Trying to access block-scoped variable `c` outside the block
    try {
        console.log("Inside function, c (outside block):", c);  // ReferenceError: c is not defined
    } catch (e) {
        console.log("Error accessing 'c':", e.message);  // Error: c is not defined
    }
    
    console.log("Global variable access inside function:", globalVar); // Output: global variable
}

myFunction();

// Trying to Access Function-scoped Variables Outside the Function
try {
    console.log(a);  // Error: a is not defined (a is function-scoped)
} catch (e) {
    console.log("Error accessing 'a':", e.message);  // Error: a is not defined
}


// Block Scope with `let`
{
    let a = 10;  // Block-scoped variable, scoped to the block
    console.log("Inside block, a:", a);  // output: 10
    
    // Hoisting for `let`
    try {
        console.log("Hoisted variable, b:", b);  // ReferenceError: Cannot access 'b' before initialization
    } catch (e) {
        console.log("Hoisted variable, b:", e.message);  // ReferenceError: Cannot access 'b' before initialization
    }
    
    let b = 20;  // b is hoisted (but cannot be accessed before declaration)
    console.log("After assignment, b:", b);  // output: 20

    // Block Scope with `let` (block-scoped)
    if (true) {
        let c = "inside a block";  // c is block-scoped and accessible only within this block
        console.log("Inside block, c:", c);  // output: inside a block
    }
    // Trying to access `c` outside the block will result in an error due to block scope
    try {
        console.log("Outside if block, c:", c);  // ReferenceError: c is not defined
    } catch (e) {
        console.log("Error accessing 'c':", e.message);  // Error: c is not defined
    }
}

// Trying to Access Block-scoped Variables Outside the Block
console.log("Accessing all variables outside block scope--let");
try {
    console.table([a, b, c]);  // Error: a, b, and c are block-scoped and not accessible outside
} catch (e) {
    console.log("Error accessing variables outside block scope:", e.message);  // Error accessing variables outside block scope
}
