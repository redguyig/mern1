var parent=document.querySelector('ul');
var p=parent.parentElement; //if we used html in query selector above we would have gotten null in this one because parent element is limited to the html document
console.log(p); 
var parent1=document.querySelector('html');
var q=parent1.parentNode;  //while parent node returns the object domtree wise
console.log(q);