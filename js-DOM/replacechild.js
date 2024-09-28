const list1=document.querySelector("ul");
const Childtochange=list1.children[1];
const newLi= document.createElement("li");
newLi.textContent="Funny Valentine";
list1.replaceChild(newLi,Childtochange);
console.log("Second element of the list was replaced from Kars to Funny Valentine using DOM")
