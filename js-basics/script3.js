//operators

//arithmetic operators
console.log("Arithmetic operators");
let a = 20;
let b = 10;
console.log(a + b); //addition operator
console.log(a - b); //subtraction operator
console.log(a * b); //multiplication operator
console.log(a / b); //division operator
console.log(a ** b); //power operator (exponentiation)
console.log(a % b); //modulus operator (to find remainder)
console.log("Increment operator");
//increment operator
console.log(a++); //postfix operator (the value is printed then the operation is performed on it)
console.log(++a); //prefix operator (the value is incremented first then it is printed)
console.log(a);

// comparison operators
console.log("Comparison operator");
var x = 5;
var y = 6;
console.log(a == b); //checks equality of the opearands
console.log(a != b); //checks for the non equality of the operands
console.log(a > b); //is a larger than b ?
console.log(a < b); //is a smaller than b?
console.log(a >= b); //is a larger than or equal to b?
console.log(a <= b); //is a smaller than or equal to b?

console.log("exceptional case for comparison");
// exceptional case for comparison
var x = "6";
var y = 6;
console.log(x == y); //result turns out to be true because javascript converts the string to a number then compare (ch)
console.log(x != y); //result turns out to be false because javascript converts string to a number then compare

console.log("using === and !== to avoid exception");
// to avoid these error we can use the other opeartors which compare the operand data type as well
console.log(x === y);
console.log(x !== y);

console.log("Logical operators ");
// LOGICAL OPERATOR
console.log(2 > 3 || 3 < 4); //or operator = || if any one of the value is true then the value will be true
console.log(2 > 3 && 3 < 4); // and operator=&& if both value are true then only it prints true
console.log(!false); //not operator
