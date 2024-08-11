var map1= new Map([[1,"one"],["fname","Mickey"],["whole number",[0,1,2,3,4]]]);
console.log(map1);
var k=map1.keys();
for (var key of k  ){
    console.log(key);
}
console.log(map1);
console.log(map1.get(1))//helps in getting the item stores with the key 
//basically objects but helps in storing keys as any form i.e. string,integer,etc
var map2= new Map();
map2.set("fname","Mouse");
console.log(map2);


//if variable is iterable use for..of loop rather than for..in 