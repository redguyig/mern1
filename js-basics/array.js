let name=["john","jane","Cena"]; //unlike cpp it can accept multiple data types in a single array 
name.push(null); //pushes the null element to the last
name.unshift(1); //pushes the int 1 to the beginning of the array 
name.splice(1,0,1);  //the first one is the index number and the 0 represents that  no next index is to be taken, if we took 2 there then it would have removed the first and second index, and the third argument is the number to be added into the array
console.log(name[0]); //same indexing as other languages
let arr1 =[10,20,35,19,25,60];
console.log(arr1);
for (let i=0;i<arr1.length;i++){
    console.log(arr1[i]+" "+i);
}
// alternative method
arr1.forEach((val,index,array)=>{  //only one argument can also be taken to print but it is a positional argument so the first place is fixef for value , second for index and the third for the array itself
console.log(val+" "+index+" "+ array);  //the val prints the element while index prints the index and array prints the whole array at once
});

let arr12 =[10,20,35,19,25,60];

let x = arr12.forEach((v,i)=>{
return v
})
console.log(x);
// x comes undefined as the foreach function cannnot store the value in any other variable 
// alternative for this is arr12.map
 let y = arr12.map((v,i)=>{
    return v+10;
 })
 console.log(y);

//  to concatenate two arrays
console.log(arr1.concat(arr12));
// to find the index of an element
console.log(arr1.indexOf(20));
// there is also a reverse function and sort functionuse arr1.reverse or arr1.sort

let z=arr1.slice(1,4); //prints the 1,2 and 3rd element of the array rest is removed
console.log(z);

// meanwhile incase of splice the first argument is the index and the second arguemnt is about how many elemnts are removed after it 
let p=arr1.splice(1,4);
console.log(p+"yes");