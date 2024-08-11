function f1(){
    console.log("This is function 1")
    function f2(){
        console.log("I am function 2")
    }
    f2();
}
f1();
//this is how we call a function inside a function 
// no it cannot be acceseed outside just return it or something using if clause for specific conditions 
//also variable described inside f2 can't be accessed by f1 but vice versa is true 


//debugger 

function f4(){
    debugger;
    //helpful when checking over iterations and block , it is visible in the inspect elements panel 
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
f4()
