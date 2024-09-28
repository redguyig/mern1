let a = document.querySelector('.Part2');
// a.innerHTML='<b>This has been changed using innerHTML</b>'
a.innerHTML+='<b>This has been changed using innerHTML</b>'  //after using += the given element is added to the already exisitng element rather than overwriting it


console.log(a)
//OUTER HTML 
a.outerHTML='<b>This is outerhtml which is not a part of the list but we can use "list" tag on this to add it to the list</b>'
console.log(a)