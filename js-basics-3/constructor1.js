//construcor functions 
//they are only executed with new keyword
function User(name){
    this.name= name;
    // console.log(name);
}
var bro1= User("yes");
console.log(bro1); //this will return undefined directly since the this keyword in the function points to the global scope or the window object where no such identifier as name is defined hence the error
//to rectify this we use the new keyword

var bro2= new User("yes1");
console.log(bro2);
//for more error solving we can do it this way as well
function user2(name1){
    if (!new.target){
        return new user2(name1);
    }
    this.name1=name1;
}

var hitesh=user2("hitesh")
console.log(hitesh.name1)
console.log(hitesh);