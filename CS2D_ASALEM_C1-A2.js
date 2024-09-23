let a = 25;
let b = 20;
let c = 12;
let d = 15;
let e = 15;

const sum = a + b + c + d + e;

console.log(`Sum of variables: ${sum}`);
console.log(`d > e: ${d > e}`);
console.log(`d < e: ${d < e}`);
console.log(`d == e: ${d == e}`);

let subtractResult = a - d;
let multiplyResult = (a * c) / d;
let exponentResult = Math.pow(e, c);
e = c;

console.log(`Subtract all the values of the declared variables: ${subtractResult}`);
console.log(`Multiply the values of variable a and c, divided by constant e: ${multiplyResult}`);
console.log(`Display the exponent value of constant e raise to the power of variable c: ${exponentResult}`);
console.log(`Reassign the value of c.3 to constant e, then display the result: ${e}`);
