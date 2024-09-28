//get element by tag name in this case the div tag
var a =document.getElementsByTagName('li');
console.log(a);
//get element by class name in this case the class name being part1
var b= document.getElementsByClassName('Part1');
console.log(b);
//get element by id name which is unique for each element 
var c= document.getElementById('hands');
console.log(c);

//query selector
var d= document.querySelector('#hands') //using # specifies that it's an ID and using . before name specifies that it's a class 
console.log(d);
 //but query selector only takes one query at a time  this can be solved a bit by using querySeclectorAll()
let e=document.querySelector(".Part1");
console.log(e);

let f = document.querySelectorAll(".Part1");
console.log(f);