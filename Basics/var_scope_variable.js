// 1. Global Scope
var globalVar = "global variable";  // Global scope
console.log("Global scope:", globalVar);  // output: global variable

// 2. Function Scope
function myFunction() {
    var a = 10;  // Function scope (local to the function)
    console.log("Inside function, a:", a);  // output: 10
    
    // Hoisting
    console.log("Hoisted variable, b:", b);  // output: undefined (hoisted, not yet assigned)
    var b = 20;  // b is hoisted
    console.log("After assignment, b:", b);  // output: 20

    // Block Scope with `var` (not block-scoped)
    if (true) {
        var c = "inside a block";  // c is function-scoped, not block-scoped
    }

    console.log("Inside function, c:", c);  // output: inside a block
    console.log("Global variable access inside function:" , globalVar); // Output: global variable
}

myFunction();

// Trying to Access Function-scoped Variables Outside the Function
try {
    console.log(a);  // Error: a is not defined (a is function-scoped)
} catch (e) {
    console.log("Error accessing 'a':", e.message);  // Error: a is not defined ,same for b and c
}

// Block Scope
{
    var a = 10;  // Block scoped (still has access to global as var is not block scoped)
    console.log("Inside block, a:", a);  // output: 10
    
    // Hoisting for `var`
    console.log("Hoisted variable, b:", b);  // output: undefined (hoisted, not yet assigned)
    var b = 20;  // b is hoisted (due to `var`)
    console.log("After assignment, b:", b);  // output: 20

    // Block Scope with `var` (non-block-scoped)
    if (true) {
        var c = "inside a block";  // c is non-block-scoped and accessible outside this block
        console.log("Inside block, c:", c);  // output: inside a block
    }
    console.log("Outside if block, c:", c);  
}

//  Trying to Access Block-scoped Variables Outside the Block--var
console.log("Accessing all varibles outside block scope--var")
console.table([a,b,c])