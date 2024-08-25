var obj1={
    fname:"Shri",
    
}
// obj1.f1();
function f1(age,gender){
        console.log(this.fname,age,gender);
    }
var obj2={
    fname:"Krishna",

}
//to print the obj2's fname using the f1 function in obj1 we use the call constructor

// obj1.f1.call(obj2);   --> was used when f1 was defined in obj1
f1.call(obj2,20);  //calls fname of obj2 such that the this keyword points towards the object 2 rater than window object 

f1.apply(obj2,[20,"male"]);  //apply takes array like input rather than call which can take individual components

var a = f1.bind(obj2,20,"Male");
console.log(typeof a )