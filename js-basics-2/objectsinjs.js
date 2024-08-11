let obj1 = {
    name:"Deadpool",
    age:"Unknown",
    last_name:"Wilson",
    fun1: function(){
        console.log("This is a function inside an object");
        return "";

},
arr1:[10,20,30,40],
}

console.log(obj1.age);
//square brackets can also be used
console.log(obj1["name"]);
//objects can also contain functions within them 
console.log(obj1.fun1());
let a="Key2";
obj1[a]="alphabet";
obj1.key="item"; //creates an item with with the key as key and the string "item" as it's value 
console.log(obj1)
//to print the keys of an object
for(let i of Object.keys(obj1)){
    console.log(i);
}


//OBJECTS IN ARRAY 
let arra=[
    {user:"yes",name:1},
    {user:"ok",name:2},
    {user:"true",name:"shit"},
]

for (let i  of arra){
    console.log(i);
}
let [item1,item2,{name:name1}]=arra;
console.log(item1);
console.log(item2);
console.log(arra[2]);
console.log(name1);
console.log(arra);
console.log(name1);

