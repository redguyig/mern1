var obj={
    fname:"Josh",

}
var obj2={
    lname:"yes"
}

obj2.__proto__=obj;
console.log(obj);
console.log(obj2); //basically it creates an object obj in obj2 such that it won't be shown normally but rather when keys of obj is used within the obj2 then they will be logged meaning that even if they aren't directly indexed within them they are withing a prototype object within the object
//basically it is creating a prototype of that object so that we can do operations on that without effecting the original array or list. sort of like how we say that it is better to take 2 of a piece and try on one rather than making and carving the final product
