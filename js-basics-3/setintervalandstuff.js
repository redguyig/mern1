let num=0;
var inter= setInterval(fun1,1000);

function fun1(){
    let date=new Date().toLocaleTimeString();
    num=num+1;
    console.log(date);

}

//this prints time infintely in a 2 second interval, now to clear the output

setTimeout(()=>{
    clearInterval(inter);

},5000)