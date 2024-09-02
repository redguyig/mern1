class Bankacc{
    #balance= 0;
    deposit(amount){
        this.#balance +=amount;
        console.log(`Deposited ${amount} and current account balance is ${this.#balance}`);

    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("Insufficient money")
        }
        else{
            this.balance -= amount;
            console.log(`Withdrawn amount is ${this.amount} and new balance is ${this.balance}`);
        }
    }
    fun(){
        console.log(this.#balance);
    }
}

const firstacc= new Bankacc();
firstacc.deposit(100);
console.log(firstacc.balance); //upon using # balance becomnes private and is inaccessilble to anything outside the class, only the functions and sub classes ot the class itself can access it

//now to display the balance i.e. a private variable we can create a function in the class which returns the value of balance 
firstacc.fun();