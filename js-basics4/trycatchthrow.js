function d(a,b){
    try{
        if(b==0){
            throw new Error("Can't divide by 0")
        }
        else{
            console.log(a/b);
        }

    }catch(err){
        console.log(err.message)
    }
}

d(100,0);