result= 
console.log(result);
console.log(typeof result);
// output will be an error as result is not defined yet 
result1='3'+2;
console.log(result1);
console.log(typeof result1);
//output will be a string
//similarly even if we take anythig like true, another string the result will always be string
// but upon subtraction with 1 the result is a number 
//upon subtracting with string it will show NaN which means not a number 
// for ex
result2='3'-1;
console.log(result2);
console.log(typeof result2);
// if a boolean was used the the result would have been 2 as true is considered as 1 similarly null as 0 
// to do explicit conversion
result3='3';
result3=Number(result3);
console.log(typeof result3);
// regardless of any value put in like null and true it will print it's number 
// the number type can be changed to string by replacing number with string
// if the result3 had decimal values even then it will print the decimal no. and say it's a number type
// to convert decimal to integer replace Number data type with parseInt
// reverse can be done by using parseFloat