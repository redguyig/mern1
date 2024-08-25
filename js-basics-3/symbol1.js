// symbol represents a unique identifier
let sym=Symbol("id");
console.log(sym);
console.log(sym.toString());    

//to print the description of the symbol 

//so bascially the id description present in the symbol gives it a unique memory address 
//So if by chance we create another symbol withthe same description ,it will be completely different and using === will give us an error
//this can be said as a weak form of encapsulation 
//the example clarifies it 
let sym1=Symbol("id");
console.log(sym1 === sym);
let d1=Symbol("id")
//adding the symbols property to the object
let obj={
    name:"Yes",
    [d1]:1
}
console.log(obj);
console.log(obj.d1);
//this throws an undefined because the console.log cannot directly access the symbol 
console.log(obj[d1]);



//to use the symbol outside of an object and then put it in the object 
obj[d1]=1; 

for (let k in obj){
    console.log(k);
}  //upon running this for command it is clearly visible that the symbol object in obj is not accessible by the for loop 
//symbol can only be accessible when we specifically mentioned



