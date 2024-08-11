//creating setss

const s=new Set([10,20,30,40,50]);
console.log(s);

//elements can't repeat in set , it won't be shown in output
s.add(60);

console.log(s);
s.add("Hello World");
//diff types of data set can be added

//lenght command does not work with sets
let length=0;
for (let element of s){
    length++;
}
console.log(length);