let cont=document.querySelector('.villians');
let nodename=cont.childNodes[1].nodeName;  //childnodes[1] sort of liek traversing through the childnodes list this returns the element with index no.1 
//The read-only nodeName property of Node returns the name of the current node as a string.
let nodetype=cont.childNodes[1].nodeType;
let cont1=document.querySelectorAll('.villians');

//nodetypes list
//1.element
//2.attribute
//3.Text node 
//8.comment 
//9.document
//10.docTYpe

console.log(cont.childNodes);   
console.log(cont.children[0]);
console.log(cont.firstChild); //returns the first element of the child node (it will return comment or text if it is before the elements)
console.log(cont.firstElementChild); //returns the first element present in the child node regardless of the text or comments present before it 
//to get for the last child we can use cont.lastChild
console.log(cont.childElementCount); //returns the no. of child elements in the DOM , can verify using cont.children as it returns only the elements of the whole document 
console.log(cont.firstElementChild.parentElement); //returns the parent node of the object
console.log(cont.firstElementChild.nextSibling); //will retrun the next node of the first elementchild
console.log(cont.firstElementChild.nextElementSibling);
console.log("Real shit starts here");
//same can be done for the previous element and it's sibling 
//null value will be returned if there are no siblings present next to it or behind it so we can use that for error management
console.log(cont.parentElement);
cont1.forEach((ele) => {
    console.log(ele.previousSibling)
});
// console.log(nodename);   
// console.log(nodetype);
