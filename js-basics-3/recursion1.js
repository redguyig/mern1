//recursion (more useful in ds but used everywhere)
//normal for loop to print numbers from 1 to 10 
for (let k=1;k<=10;k++){
    console.log(k);
}
//now using recursive function

function print1to10recursion(n){
    if (n<=10){
        console.log(n);
        // n++;  -->better way to write this would be to add one in recursion call
        print1to10recursion(n+1);
    }
    
}
print1to10recursion(1);


//recursive function to print factorial 
function fact1(n){
    if (n===0){
        return 1;
    }
    else {
        return n*fact1(n-1);
    }
}
console.log(fact1(5));