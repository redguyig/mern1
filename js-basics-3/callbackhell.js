function loadingdata(callback){
    setTimeout(()=>{
        console.log("1)Loading Data......");
        callback()
    },1000)
    

}

function collectingdata(callback){  
    setTimeout(()=>{
        console.log("2)Collecting Data");
        callback();
    },5000)
    
}
function approvingdata(callback){
    setTimeout(()=>
    {
        console.log("3)Approving Data");  
        callback();  
    },7000)
    
}
function approved(callback){
  setTimeout(() => {
        console.log("4)Approved");   
        callback() 
    }, 1000);
}
loadingdata(()=>{
    collectingdata(()=>{
        collectingdata(()=>{
            approvingdata(()=>{
                approved(()=>console.log("All task successfuly completed"));
            });
        })
    });
})

// The code literally became hell to read due to the large no. of callback , so we use the term callback hell to recognise this problem and thus many solutions or functions have been created to counter this hell (it was literally hell to type as well)