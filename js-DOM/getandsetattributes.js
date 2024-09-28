let a1=document.querySelector("#hero");
console.log(a1.getAttribute("about")); //about can be replaced with id to check the attributes of the properties meneitoned 
a1.setAttribute("example",123);
console.log(a1.outerHTML);
//for loop to print all attributes
for(let att of a1.attributes){
    console.log(`${att.name}=${att.value}`);
}