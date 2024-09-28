// a1= document.querySelector('h1').innerText;//APPARENTLY, it worked when I used the display prroperty in the span tag and not the h1 tag, anyways it wont' be able to display the text in span tag once we use the none display attribute
// console.log(a1);
// console.log("--------------")
// a2=document.querySelector('h1').textContent;
// console.log(a2);

//INSERT ADJACENT HTML 
var target= document.querySelector(".lol");
var newE='<b> Hello World</b>';
// target.insertAdjacentHTML("beforebegin",newE);
target.insertAdjacentHTML("afterbegin",newE);
target.insertAdjacentHTML("beforeend",newE);