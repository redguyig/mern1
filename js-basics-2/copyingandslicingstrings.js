let arr1=["yes1",2024,true,null];
let arr2;
arr2=arr1;
console.log(arr2);

//any changes made on arr2 with this method will also reflect on arr1 
arr2.push("bruh");
console.log(arr2);
console.log(arr1);

//to avoid getting this type of mistake we can use the following methods
let arr3=["bruh",123,false,undefined];
let arr4 = arr3.slice(0).concat(["yes1","hello world"]);
console.log(arr4);
console.log(arr3);
arr4.push("yes");
console.log(arr4);
console.log(arr3);


//another method to do this is to use the spread operator 
let arr5=["asdgh",12345,true,null];
let arr6=[...arr5];  //this is the spread operator which copies an array
console.log(arr5);
console.log(arr6);
arr6.push("hello"); 