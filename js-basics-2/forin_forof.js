let arr=[10,20,30,40,50];
for (let ar in arr){  //this combination of for and in prints the index of the array 
    console.log(arr[ar]+ " "+ ar);
}

//to print the elements of the array 
for (let ar of arr){
    console.log(ar);
}