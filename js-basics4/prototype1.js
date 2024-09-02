function Person(name,age){
    let person = Object.create(Person.prototype)
    // person.name=name;  //we can use the new keyword to avoid this line as it makes the code look neater memort wise idk 
    this.name=name;
    // person.age=age; //same logic as above
    this.age=age;
    // return person // since the new keyword was used now we don't need to use the return statement 
}

// var obj={
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

Person.prototype.greet= function(){
    
        console.log(`Hello ${this.name}`)
    
}
let user= new Person("John",8);
user.greet();
console.log(user); //this returns an undefined because console.log is being used two times