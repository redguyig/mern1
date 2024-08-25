//this 

var obj1={
    fname:"John",
    age:8,
    fun:function(){
        console.log(obj1.age);//this also works as it calls the 
        console.log(this.fname)  // we cannot call this variable in the function without it, it gives an error
        console.log(this);  //it will prints the whole objects with all it's properties and methods 
    }
}
obj1.fun();


// incase no object is there and we log the this function, it will print a window object 
function fun(){
    console.log("Hello world");
}
window.fun();  //this command works when using the insepct tab to get the dev console, won't work here
