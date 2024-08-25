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

async function ex(){
    await loadingdata();
    await collectingdata();
    await approvingdata();
    await approved();
}
ex().catch((err)=>{console.log(err)});
//basically an alternative to writing multiple this 
