//since javascript is compiled rather than interpreted we put a line of code into mulitple lines and it would still work

fetch('https://jsonplaceholder.typicode.com/posts') //we can use url or either file location, but since they are in the same folder we don't need to specify paths
.then(response=>{
    if(!response.ok){
        throw new Error("Network is not responding" )
    }
    return response.json();  //if the data would have been in text form we would have written response.text()
    
}).then(data =>
    data.forEach(element => {
        console.log(element) //now we can find according to the keys as wel for example fi we use element.title then for all the indexes the title section will be displayed
    })
    // console.log(data)
).catch(error=> console.log(error.message))  //if we used console.error then it would be shown as an error in the console



// NOW TO CREATE OIUR OWN DATA / ADD OUR OWN DATA TO THE JSON FILE 


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


    // https://jsonplaceholder.typicode.com/guide/   //useful guide for learning about fetch
      


