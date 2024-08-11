let arr1=["yes",1,"true","Magnus"];
let [item1,item2,...item3]= arr1; //item1 takes the first item, item2 takes the second item and so on but since the third item has spread operator on it, it takes all the reamining elements in the arrray1;
console.log(item1)
console.log(item2)
console.log(item3)