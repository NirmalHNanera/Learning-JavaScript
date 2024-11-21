// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a); 
// console.log(b); 
// console.log(c);

// Var Examples
// hoisting of var is always global and initial value after hoisting is undefined and its value can be changed any number of times
// console.log(a); //undefined
// a=10;
// console.log(a); //10
// var a;
// console.log(a); //10
// var a =20;
// console.log(a); //20

// Let Examples
// console.log(a); // Cannot access 'a' before initialization
// let a;
// console.log(a); // undefined
// a=10;
// console.log(a); // 10
// a=20;
// console.log(a); // 20
// let a =20; //  Identifier 'a' has already been declared
// console.log(a);

// Const Examples

const a=2;
console.log(a); // 2
// a=10; // Cannot reassign a const variable
// console.log(a);
let b = 10;
var c = 10;
const sum = b+c+10;
console.log(sum); 