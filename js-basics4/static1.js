class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes some noise`);
    }
    static sing(){
        console.log(`${this.name} sings a song`); //after writing static this method does not work for the object itslf
    }
}

class cat extends Animal{
    constructor(name){
        super(name);
    }
}

let d=new Animal("Lalu")
d.speak();
Animal.sing(d.name);  //after using static only the original class can access it and not the new objects created using new 

class Game{
    static score=0;


    constructor(){
        this.isplaying=false;
    }
    start(){
        this.playing=true;
        console.log("The game has started");
    }

    end(){
        this.playing=false;
        console.log("The game has ended");
        Game.updatescore();
    }
    static updatescore(){
        Game.score++;
        console.log(`Score is  ${Game.score}`)
    }

}

const game= new Game;
game.start();
game.end();
game.end();