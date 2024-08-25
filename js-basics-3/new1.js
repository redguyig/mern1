function fun(){
    let fname= "john";
    // return this.fname;
    //in this case the fuynction is stored in the global environment  in the function to get it's value we will have to create a same empty function using the  new keyword we can create a new empty object which will then have the new object
    this.fname =fname; 
    // console.log("Hello world");
    // console.log(this)
}
console.log(fun());  //returns undefined as the function fun is stored in the global scope that is in the windows object 
var obj1 = new fun(); //bascially the new keyword helps in creating copying functions but not their internal workings ?
//new almost works like constructor in cpp oops
// so basically the way it works is simple that the new keyword forces the this keyword used to be used outside the global scope and enter the local scope and take the values from the function values entere
console.log(obj1.fname); 