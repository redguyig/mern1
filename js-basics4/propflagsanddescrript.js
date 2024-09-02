let emp={}
emp.name ="Josh";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));
Object.defineProperty(emp,"age",{
    writable:false, //makes the proeprty only readable not writable when set to false i.e. value cannot be changed
    value:21,
    configurable:true, //if it is set to false then value and attribute cannot be deleted i.e. neither the value 21 nor can age be deleted
    enumerable:true // if it is set to false , then it won't be enumerated while using for loops and such 
});
console.log(emp);    
console.log(Object.getOwnPropertyDescriptor(emp,"age"));
emp.age=20;
