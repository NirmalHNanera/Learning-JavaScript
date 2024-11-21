// 1. Global Scope with `const`
const globalConst = "global constant";  // Global scope
console.log("Global scope with const:", globalConst);  // output: global constant

// 2. Function Scope with `const`
function myFunctionWithConst() {
    const a = 10;  // Function scope (local to the function)
    console.log("Inside function with const, a:", a);  // output: 10
    
    // Hoisting with `const`
    try {
        console.log("Hoisted variable with const, b:", b);  // ReferenceError: Cannot access 'b' before initialization
    } catch (e) {
        console.log("Hoisted variable with const, b:", e.message);  // ReferenceError: Cannot access 'b' before initialization
    }

    const b = 20;  // b is hoisted
    console.log("After assignment with const, b:", b);  // output: 20

    // Block Scope with `const` (block-scoped)
    if (true) {
        const c = "inside a block with const";  // c is block-scoped, only accessible inside this block
        console.log("Inside function with const, c:", c);  // output: inside a block with const
    }

    // Trying to access block-scoped variable `c` outside the block
    try {
        console.log("Inside function with const, c (outside block):", c);  // ReferenceError: c is not defined
    } catch (e) {
        console.log("Error accessing 'c' with const:", e.message);  // Error: c is not defined
    }

    console.log("Global constant access inside function:", globalConst); // Output: global constant
}

myFunctionWithConst();

// Trying to Access Function-scoped Variables Outside the Function
try {
    console.log(a);  // Error: a is not defined (a is function-scoped)
} catch (e) {
    console.log("Error accessing 'a' with const:", e.message);  // Error: a is not defined
}

// Block Scope with `const`
{
    const a = 10;  // Block-scoped variable, scoped to the block
    console.log("Inside block with const, a:", a);  // output: 10
    
    // Hoisting for `const`
    try {
        console.log("Hoisted variable with const, b:", b);  // ReferenceError: Cannot access 'b' before initialization
    } catch (e) {
        console.log("Hoisted variable with const, b:", e.message);  // ReferenceError: Cannot access 'b' before initialization
    }

    const b = 20;  // b is hoisted (but cannot be accessed before declaration)
    console.log("After assignment with const, b:", b);  // output: 20

    // Block Scope with `const` (block-scoped)
    if (true) {
        const c = "inside a block with const";  // c is block-scoped and accessible only within this block
        console.log("Inside block with const, c:", c);  // output: inside a block with const
    }
    // Trying to access `c` outside the block will result in an error due to block scope
    try {
        console.log("Outside if block with const, c:", c);  // ReferenceError: c is not defined
    } catch (e) {
        console.log("Error accessing 'c' with const:", e.message);  // Error: c is not defined
    }
}

// Trying to Access Block-scoped Variables Outside the Block
console.log("Accessing all variables outside block scope--const");
try {
    console.table([a, b, c]);  // Error: a, b, and c are block-scoped and not accessible outside
} catch (e) {
    console.log("Error accessing variables outside block scope with const:", e.message);  // Error accessing variables outside block scope
}

// Attempt to reassign a `const` variable (this will throw an error)
try {
    globalConst = "new value";  // Error: Assignment to constant variable.
} catch (e) {
    console.log("Error reassigning const variable:", e.message);  // Error: Assignment to constant variable.
}
