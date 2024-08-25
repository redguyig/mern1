function add1(a,b,callback){
    let sum=a+b;
    callback(sum);
}
function fun(val){
    console.log(val);
}

add1(1,2,fun);
//callback is used to call another function in some other function 