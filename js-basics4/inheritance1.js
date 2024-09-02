class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes some noise`);
    }
}

class dog extends Animal{   //now dog is a sub class of animals and it can access all the properties of animal class
    constructor(name){
        // this.name=name; //now using this results in an error,so we need to use super
        super(name); //it's almost the same as this except this points to an object while super points to the parent class  
    }
  
}

let d= new Animal("Xyz")
d.speak(); //this speak function is taken from the animal class
//but what if we want to keep it so that the function speak remains in animal class but a sub class for example dog be able to utilise it 