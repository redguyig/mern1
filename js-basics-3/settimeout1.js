console.log("This");
setTimeout(()=>{
    console.log("Asynchronus ")
},1000)

//in this type of commands the arrow function is used so that the in case a "this" was used in it , that this can access the lexical parent function rather than pointing out to the global window i.e. the this keyword would refer to the data stored in the object when used in a nested function rather than pointing to the next object 

console.log("is")


function fun1(){
    console.log("this line is inside function and appears after 2 sec")
}
setTimeout(fun1,2000);
console.log("the line below is ");



//even if the timer is set to 0, the function prints according to the stack call, because the functions are stored in a stack so the settimeout is executed at last

function f2(){
    console.log("3rd");
}
setTimeout(f2,0);
console.log("1st");
console.log("2nd");