class Person{
    constructor(name,age){ //this helps us to pass the parameters to the class 

        this.name=name;
        this.age=age;
    }
    greet= function(){
        console.log(`Hello this is ${this.name} this side`);
    } 
    hello(){
        console.log(`Hello ${this.name}`)  //defined in a little different way then the greet function but this works as well
    }
}

let user = new Person("John",8)
user.greet();
console.log(user);
console.log(typeof Person) //this returns as a function 
//this implies that class acts like a function except constructor is used to pass arguments

console.log(Person.prototype.hello);
