function fun1(task){
    return new Promise((resolve,reject)=>{
        if (task){
            resolve("Completed");
        }
        else{
            reject("not completed");
        }
    })

}

let onresolve=(res)=>{
    console.log(res);
}
let onreject=(err)=>{
    console.log(err);
}

fun1(true).then(onresolve).catch(onreject); //returns Completed value 

//Now to use promise to avoid callback hell
function loadingdata(){
    return new Promise((resolve,reject)=>{
        
            setTimeout(()=>{
                console.log("1)Loading Data......");
                resolve();
            },1000)
        
    })}



function collectingdata(callback){  
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("2)Collecting Data");
        resolve();
    },5000)
})
}
function approvingdata(callback){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        console.log("3)Approving Data");  
        reject("Data Error......");  
    },7000)
})
}
function approved(callback){
    return new Promise((resolve,reject)=>{
  setTimeout(() => {
        console.log("4)Approved");   
        resolve(); 
    }, 1000);
})
}
// }
// loadingdata(()=>{
//     collectingdata(()=>{
//         collectingdata(()=>{
//             approvingdata(()=>{
//                 approved(()=>console.log("All task successfuly completed"));
//             });
//         })
//     });
// })

//remember that in all the settimeout commands that we used instead of passing resolve we could have passed callback and it would have done the same thing but to maintain clarity of code we prefer this method 

//The Promise constructor expects a function and will pass two arguments to it: the first one being a function that resolves the promise, and the second one being a function that rejects the promise. With that being said, you can name these arguments anything you want, but they must be in the correct order.

loadingdata(false).then(collectingdata).then(approvingdata).then(approved).catch((err)=>{
    console.log(err)
});